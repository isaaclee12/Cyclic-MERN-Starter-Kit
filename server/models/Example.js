/* 
* Boilerplate code for creating your mongoDB/mongoose Schemas
* See the link below for the docs:
* https://mongoosejs.com/docs/schematypes.html
*/
const mongoose = require("mongoose");
const Joi = require("joi"); // data validation library

STRING_MAX_LENGTH = 100;

// Define the schema of the "event" object
const ExampleSchema = new mongoose.Schema(
  {
    stringField: {
      type: String, // sets the type
      trim: true, // performs .trim(), which removes leading/trailing whitespace
      maxLength: STRING_MAX_LENGTH, // sets max lengths of strings to 100 characters
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
          condition1 = true; // Replace "true" with whatever conditions you want to check for
          condition2 = true;
          return condition1 && condition2; // if this returns true, the data is valid
        },
      },
    },
  },
  // Enable timestamps for when each entry was created and last updated
  { timestamps: true }
);

// Saving our schema as a model
const Example = mongoose.model("Example", ExampleSchema);

// Schema for validating the recieved request.body when before an Example object is instantiated.
const createExampleSchema = Joi.object({
  stringField: Joi.string().trim().min(1).max(100).required(),
  numberField: Joi.number().min(1).max(100).required(),
  dateField: Joi.date()
    // Subtract one day because time on server may differ from client
    .min(new Date() - 60 * 60 * 24 * 1000)
    .required()
});

// Export our schemas to be used in other files
module.exports = {
  Example,
  createExampleSchema,
};
