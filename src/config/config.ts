let config_data: any = null;

export const configs = () => {
  // if data already set. return it
  if (config_data != null && config_data != undefined) {
    return config_data;
  }

  config_data = {};

  //LOAD JSON
  if (
    process.env.NODE_ENV === undefined ||
    process.env.NODE_ENV == null ||
    process.env.NODE_ENV == "development"
  ) {
    config_data = require("./config.development.json");
  } else {
    if (process.env.NODE_ENV == "production") {
      config_data = require("./config.production.json");
    }
  }
  //LOAD FROM ENV VARIABLES
  config_data.port = process.env.port || config_data.port;

  return config_data;
};
