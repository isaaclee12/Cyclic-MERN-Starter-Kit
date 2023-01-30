const { Example } = require("../models/Example");
const httpError = require("../utilities/httpError");
// const bodyParser = require('body-parser');
// const { createExamplesArray } = require("../utilities/createExamplesArray");
require("express-async-errors");

module.exports = {
  create: async (req, res) => {
    // const formData = req.body;
    // const example = createExamplesArray(formData);

    // consume the example 
    const example = req.body;
    console.log(example);

    // If none of the days of the week selected is between start and end dates
    // if (!example.length) {
    //   throw httpError(400);
    // }

    // set the user id
    example.user = req.user._id;

    // insertMany result doesn't populate user display name
    const result = await Example.create(example);
    // const result = await Example.insertMany(example);
    
    // find newly added example and populate user with displayName
    const targetID = result._id;
    const addedExamples = await Example.find({ _id: targetID })
      .populate("user", "displayName")
      .lean()
      .exec();

    res.status(201).json({ message: "Example created!", example: addedExamples });
  },
  getAll: async (req, res) => {
    // Get an array of ALL example
    const example = await Example.find()
      .populate("user", "displayName")
      .lean()
      .exec();

    // return all example
    res.json(example);
  },
  getOne: async (req, res) => {
    const { id } = req.params;

    // Get event by id
    const event = await Example.findById(id).lean().exec();

    // Check if event exists
    if (!event) {
      throw httpError(404);
    }

    res.json(event);
  },
  deleteExample: async (req, res) => {
    const { id } = req.params;

    // Prevent users that are authenticated from deleting example they do not author.
    const event = await Example.findOne({ _id: id, user: req.user._id });
    if (!event) {
      throw httpError(404);
    }

    // Delete event by id
    await Example.findByIdAndDelete(id);

    res.sendStatus(204);
  },
  deleteAllExamples: async (req, res) => {
    const { groupId } = req.params;

    // Prevent users that are authenticated from deleting example they do not author.
    const count = await Example.countDocuments({
      groupId,
      user: req.user._id,
    }).exec();

    if (count === 0) {
      throw httpError(404);
    }

    const { deletedCount } = await Example.deleteMany({
      groupId,
      user: req.user._id,
    }).exec();

    // If the number of documents found is not equal to the number of deleted documents
    // Something may have gone wrong
    if (count !== deletedCount) {
      console.log(`Found: ${count}. Deleted: ${deletedCount}`);
    }

    res.sendStatus(204);
  },
};
