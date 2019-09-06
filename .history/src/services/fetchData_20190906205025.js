import axios from "axios";

export async function fetchData(URL, stateDescription, component) {
  try {
    const response = await axios.get(URL, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    let { data } = response;
    console.log(`fetch ${stateDescription} ${data}`);

    component.setState({
      [stateDescription]: { ...data }
    });
  } catch (error) {
    console.error(error);
  }
}
