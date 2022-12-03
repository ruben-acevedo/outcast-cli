const axios = require("axios");

const forecast = async (coordinates) => {
  const url = `https://api.darksky.net/forecast/${process.env.FORECAST_TOKEN}/${coordinates[0]}, ${coordinates[1]}?units=si`;
  return await axios
    .get(url, {
      headers: {
        "accept-encoding": null,
      },
    })
    .then((res) => res.data);
};

module.exports = forecast;
