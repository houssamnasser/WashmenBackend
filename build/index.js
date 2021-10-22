"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_errors_1 = __importDefault(require("http-errors"));
var config_development_json_1 = __importDefault(require("./config/config.development.json"));
var partners_route_1 = __importDefault(require("./routes/partners.route"));
var express_2 = require("express");
var app = (0, express_1.default)();
var usersRouter = (0, express_2.Router)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/api", partners_route_1.default);
//* Catch HTTP 404
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
//* Error Handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    });
});
//start the server
var port = process.env.PORT || config_development_json_1.default.port;
app.listen(port, function () {
    console.log("Running on port " + port);
});
