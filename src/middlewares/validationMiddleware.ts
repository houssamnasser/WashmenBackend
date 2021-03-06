import joi from "joi";

export const middleware = (schema: joi.ObjectSchema<any>) => {
  return (req: any, res: any, next: any) => {
    const { error } = schema.validate(req.body);

    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;

      const message = details.map((i: any) => i.message).join(",");

      res.status(400).json({ error: message });
    }
  };
};
