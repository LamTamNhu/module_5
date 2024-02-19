import axios from "axios";
export async function findAll() {
    try {
        const result = await axios.get("http://localhost:8080/api/customers")
        console.log("Result page!!")
        console.log(result.data.content)
        return result.data.content
    } catch (e) {
        console.log(e)
    }
}