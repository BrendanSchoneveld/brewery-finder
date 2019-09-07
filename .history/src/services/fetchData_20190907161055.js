import axios from "axios";

/* export async function fetchData(URL, stateDescription, component) {
  try {
    let response = await fetch(URL);
    let data = await response.json();

    console.log(data);

    component.setState({
      [stateDescription]: { data }
    });
  } catch (error) {
    console.error(error);
  }
} */

export default async function fetchData({
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
    let response = await axios.get(URL, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    let { data } = response;
    console.log(data);

    component.setState({
      [stateDescription]: [...data]
    });
  } catch (error) {
    console.error(error);
  }
}
