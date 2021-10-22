"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
var middleware = function (schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body).error;
        var valid = error == null;
        if (valid) {
            next();
        }
        else {
            var details = error.details;
            var message = details.map(function (i) { return i.message; }).join(",");
            res.status(400).json({ error: message });
        }
    };
};
exports.middleware = middleware;
