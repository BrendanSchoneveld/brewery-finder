import axios from "axios";

export async function fetchData(URL, stateDescription, component) {
  try {
    const response = await axios.get(JSON.stringify(URL), {
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
