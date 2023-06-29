import axios from "axios";

export async function getData() {
    let response = await axios.get('https://www.jsonkeeper.com/b/MDXW')
        .then((response) => {
            let data = response.data;
        })
        catch(error){
            console.log("Error: API call not working");
        }
}

console.log(getData());