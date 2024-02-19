import axios from "axios";

export async function findAll() {
    try {
        const result = await axios.get("http://localhost:8080/api/items")
        return result.data.content
    } catch (e) {
        console.log(e)
    }
}

export async function findByName(name) {
    try {
        const result = await axios.get("http://localhost:8080/api/items?name=" + name)
        return result.data.content;
    } catch (e) {
        console.log(e)
    }
}