import isValidObjectId from "mongoose";
import httpError from "../utilities/httpError.js";

// Check if Mongoose ObjectId is valid
const validateObjectId = (req, _, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw httpError(404);
  }
  next();
};

export default validateObjectId;
