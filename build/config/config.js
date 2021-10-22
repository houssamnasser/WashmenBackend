"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
var config_data = null;
var configs = function () {
    // if data already set. return it
    if (config_data != null && config_data != undefined) {
        return config_data;
    }
    config_data = {};
    //LOAD JSON
    if (process.env.NODE_ENV === undefined ||
        process.env.NODE_ENV == null ||
        process.env.NODE_ENV == "development") {
        config_data = require("./config.development.json");
    }
    else {
        if (process.env.NODE_ENV == "production") {
            config_data = require("./config.production.json");
        }
    }
    //LOAD FROM ENV VARIABLES
    config_data.port = process.env.port || config_data.port;
    return config_data;
};
exports.configs = configs;
