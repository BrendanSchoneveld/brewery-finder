import axios from "axios";

export async function fetchData({ URL, token, stateDescription, component }) {
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: "Bearer " + token
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
