import axios from "axios";

export async function fetchData(URL, stateDescription, component) {
  try {
    let response = await fetch(URL);
    let data = await response.json();

    component.setState({
      [stateDescription]: { data }
    });
  } catch (error) {
    console.error(error);
  }
}

/* export async function fetchData(URL, stateDescription, component) {
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
} */
