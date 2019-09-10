import axios from "axios";

const distance = require("google-distance-matrix");

export const test = ({
  endpoint,
  format,
  units,
  origins,
  destinations,
  mode,
  language,
  API_KEY,
  stateDescription,
  component
}) => {
  distance.key(API_KEY);
  distance.units(units);
  distance.mode(mode);
  distance.matrix(origins, destinations, function(err, distances) {
    if (err) {
      return console.log(err);
    }
    if (!distances) {
      return console.log("no distances");
    }
    if (distances.status == "OK") {
      for (var i = 0; i < origins.length; i++) {
        for (var j = 0; j < destinations.length; j++) {
          var origin = distances.origin_addresses[i];
          var destination = distances.destination_addresses[j];
          if (distances.rows[0].elements[j].status == "OK") {
            var distance = distances.rows[i].elements[j].distance.text;
            console.log(
              "Distance from " +
                origin +
                " to " +
                destination +
                " is " +
                distance
            );
          } else {
            console.log(
              destination + " is not reachable by land from " + origin
            );
          }
        }
      }
    }
  });
};

/* export default async function fetchData({
  endpoint,
  format,
  units,
  origins,
  destinations,
  mode,
  language,
  API_KEY,
  stateDescription,
  component
}) {
  let displayFormat = format ? format : null,
    displayUnits = units ? `?units=${units}` : null,
    displayMode = mode ? `&mode=${mode}` : null,
    displayLanguage = language ? `&language=${language}` : null;
  const URL = `${endpoint}${displayFormat}${displayUnits}&origins=${origins}&destinations=${destinations}${displayMode}${displayLanguage}&key=${API_KEY}`;
  try {
    let response = await axios({
      url: URL,
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    });
    let { data } = response;

    component.setState({
      [stateDescription]: [...data]
    });
  } catch (error) {
    console.error(error);
  }
} */
