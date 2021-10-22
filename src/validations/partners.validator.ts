import Joi from "joi";

export const getPartnersSchema: Joi.ObjectSchema<any> = Joi.object({
  range: Joi.number().greater(0).required().messages({
    "number.min": "range should be greater than zero",
  }),
});
