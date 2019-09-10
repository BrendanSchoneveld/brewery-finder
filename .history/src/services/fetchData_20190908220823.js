import axios from "axios";

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

    component.setState({
      [stateDescription]: [...data]
    });
  } catch (error) {
    console.error(error);
  }
}
