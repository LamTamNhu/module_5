import axios from "axios";

export async function findAll() {
    try {
        const result = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
        console.log("List cards:")
        console.log(result.data)
        return result.data
    } catch (e) {
        console.log(e)
    }
}