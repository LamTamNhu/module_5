import axios from "axios";

export async function findAll() {
    try {
        const result = await axios.get("http://localhost:8080/api/items")
        console.log("List cards:")
        console.log(result.data.content)
        return result.data.content
    } catch (e) {
        console.log(e)
    }
}