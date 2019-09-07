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
  const URL = `${endpoint}${format}?units=${units}&origins=${origins}&destinations=${destinations}&mode=${mode}&language=${language}&key=${API_KEY}`;
  try {
    let response = await axios.get(URL, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    });
    let { data } = response;

    component.setState({
      [stateDescription]: { ...data }
    });
  } catch (error) {
    console.error(error);
  }
}
