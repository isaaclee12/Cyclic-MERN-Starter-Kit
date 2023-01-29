/* 
* Boilerplate code for creating your mongoDB/mongoose Schemas
* See the link below for the docs:
* https://mongoosejs.com/docs/schematypes.html
*/
const mongoose = require("mongoose");
const Joi = require("joi");

STRING_MAX_LENGTH = 280;

// Define the schema of the "event" object
const ExampleSchema = new mongoose.Schema(
  {
    stringField: {
      type: String, // sets the type
      trim: true, // performs .trim(), which removes leading/trailing whitespace
      maxLength: 100, // sets max lengths of strings to 100 characters
      required: true, // field data required to instantiate this schema
    },
    numberField: {
      type: Number,
      min: 1, // sets the minimum value of this field
      max: 100, // sets the maximum value of this field
      required: true,
    },
    dateField: {
      type: Date,
      required: true,

      // A custom validator (copied from models/Event.js) which checks if 
      // certain conditions about the data are true
      validate: { 
        validator: function (value) {
          condition1 = insertConditionalStatementHere;
          condition2 = insertConditionalStatementHere;
          return condition1 && condition2; // if this returns true, the data is valid
        },
      },
    },
    // A customer field type based on another model (see ref: "User")
    user: {
      type: mongoose.SchemaTypes.ObjectId, // User: is the ObjectId of author user
      required: true,
      ref: "User", // This uses the User schema as the schema for this field
    },
    // A list field type (MongoDB can store arrays as data)
    rsvpList: [{ type: mongoose.SchemaTypes.ObjectId }],
  },
  // Enable timestamps for when each entry was created and last updated
  { timestamps: true }
);

// Saving our schema as a model
const Example = mongoose.model("Example", ExampleSchema);

// Schema for validating the recieved request.body when before an Example object is instantiated.
const createExampleSchema = Joi.object({
  stringField: Joi.string().trim().min(1).max(100).required(),
  numberField: Joi.string().min(1).max(100).required(),
  dateField: Joi.date()
    // Subtract one day because time on server may differ from client
    .min(new Date() - 60 * 60 * 24 * 1000)
    .required(),
  firstExampleEnd: Joi.date()
    // time on server may differ from the time on client
    // the most extreme offsets are +12 and -14 hours from utc
    .min(new Date() - 1000 * 60 * 60 * 26)
    .required(),
  lastExampleStart: Joi.date()
    // last event start date should not be earlier than first event start date
    .min(Joi.ref("firstExampleStart"))
    // at most 90 days from firstExampleStart
    .max(
      Joi.ref("firstExampleStart", {
        adjust: val => {
          let date = new Date(val);
          date.setDate(date.getDate() + 90);
          return date;
        },
      })
    )
    // Limit events to 2023
    .less("2024-01-01")
    // If recurring rate is 'noRecurr' lastExampleStart should be equal to firstExampleStart
    .when(Joi.ref("/recurring.rate"), {
      is: Joi.valid("noRecurr"),
      then: Joi.ref("firstExampleStart"),
    })
    .required()
    .messages({
      "date.max":
        '"lastExampleStart" must be within 90 days of "ref:firstExampleStart"',
    }),
  recurring: Joi.object({
    // Rate is either "noRecurr" or "weekly"
    rate: Joi.string()
      .valid("noRecurr", "weekly")
      .max(STRING_MAX_LENGTH)
      .required(),
    days: Joi.when(Joi.ref("rate"), {
      // if rate is noRecurr
      is: Joi.valid("noRecurr"),
      // then days should be empty array
      then: Joi.array().length(0),
      // otherwise the length should be between 1 and 7 and only include days mon-sun
      otherwise: Joi.array()
        .min(1)
        .max(7)
        .items(
          Joi.string().valid(
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          )
        ),
    }).required(),
  }),
});

// Export our schemas to be used in other files
module.exports = {
  Example,
  createExampleSchema,
};
