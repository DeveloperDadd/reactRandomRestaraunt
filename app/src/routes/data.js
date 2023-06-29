import axios from "axios";

export async function getData() {
  let response = await axios.get(`https://www.jsonkeeper.com/b/MDXW`);
  let data = response.data;
  return data;
}

conso
