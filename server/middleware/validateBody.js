import httpError from "../utilities/httpError.js";

const validateBody = schema => {
  const func = async (req, _, next) => {
    try {
      const formData = req.body;
      const { error } = schema.validate(formData);
      if (error) {
        throw httpError(400, error.message);
      }
      next();
    } catch (err) {
      next(err);
    }
  };

  return func;
};

export default validateBody;
