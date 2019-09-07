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


endpoint: `https://maps.googleapis.com/maps/api/distancematrix/`,
      format: `json`,
      units: `metric`,
      origins: `${searchQuery}`,
      destinations,
      mode: ``,
      language: `nl-NL`,
      API_Key: `AIzaSyDt8TIB9kS6PblFh0CCR3epTkOF6OryOlY`,
      stateDescription: "searchResults",
      component: this

export async function fetchData({ endpoint, format, units, origins, destinations, mode, language, API_KEY, stateDescription, component }) {
  const URL = `${endpoint}, ${format}, ${units}, ${origins}, ${destinations}, ${mode}, ${language}, ${API_KEY}`;
  try {
    let response = await axios.get(URL, {
      headers: {
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
