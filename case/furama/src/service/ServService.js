import axios from "axios";

export async function findAll() {
    try {
        const result = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
        return result.data
    } catch (e) {
        console.log(e)
    }
}