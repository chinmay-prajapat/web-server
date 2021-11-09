const request = require("postman-request");
require("dotenv").config();
const gecode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.REACT_APP_MAPBOX}&limit=1`;
  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect with services", undefined);
    } else if (res.body.features.length === 0) {
      callback("The search place not found", undefined);
    } else {
      const { center, place_name } = res.body.features[0];
      callback(
        undefined,
        {
          latitude: center[0],

          longitude: center[1],

          place: place_name,
        },
        res.body.features
      );
    }
  });
};
module.exports = gecode;
