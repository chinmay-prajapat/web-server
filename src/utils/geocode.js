const request = require("postman-request");

const gecode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoia2lsdmlzaCIsImEiOiJja3ZpdmdmaTcwbjV1MnBuMGx1bjgzdWJlIn0.7tV-mCgZ-rb_fzrHMVvktw&limit=1`;
  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect with services", undefined);
    } else if (res.body.features.length === 0) {
      callback("The search place not found", undefined);
    } else {
      const { center, place_name } = res.body.features[0];
      callback(undefined, {
        latitude: center[0],

        longitude: center[1],

        place: place_name,
      });
    }
  });
};
module.exports = gecode;
