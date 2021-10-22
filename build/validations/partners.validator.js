"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartnersSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.getPartnersSchema = joi_1.default.object({
    range: joi_1.default.number().greater(0).required().messages({
        "number.min": "range should be greater than zero",
    }),
});
