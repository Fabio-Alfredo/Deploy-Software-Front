import { validationResult } from "express-validator";

export const runValidation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    return res.status(400).json({
      errors: errors.array().map((error) => error.msg),
    });
  }

  next();
};
