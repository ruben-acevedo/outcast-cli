const axios = require("axios");

const forecast = async (coordinates) => {
  const url = `https://api.darksky.net/forecast/8479bc15b3f20e3e03b19acc96462daf/${coordinates[0]}, ${coordinates[1]}?units=si`;
  return await axios
    .get(url, {
      headers: {
        "accept-encoding": null,
      },
    })
    .then((res) => {
      console.log(res.data);
    });
};

module.exports = forecast;
