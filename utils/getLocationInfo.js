const axios = require("axios");

const getLocationInfo = async (address) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicnViZW5hY2V2ZWRvIiwiYSI6ImNrN3dudmI3MjAzdzEzbG50dTdhbTNndzYifQ.gRwqI-b06A_dXIB9FyEYdA`;
  return await axios
    .get(url, {
      headers: {
        "accept-encoding": null,
      },
    })
    .then((res) => {
      return {
        location: res.data.features[0].place_name,
        coordinates: res.data.features[0].geometry.coordinates,
      };
    });
};

module.exports = getLocationInfo;
