import {useEffect, useState} from "react";
import {findAll} from "../service/ItemService";
import {createSearchParams, Link} from "react-router-dom";
import {Formik} from "formik";
import axios from "axios";

export function ItemList() {
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        async function fetchApi() {
            try {
                const listUpdated = await findAll()
                console.log("At component: ")
                console.log(listUpdated)
                setItemList(listUpdated)
            } catch (e) {
                console.log(e)
            }
        }

        fetchApi()
    }, []);
    return (<div className="container-fluid my-3">
        {/*<Formik initialValues={{text: ""}} onSubmit={(data) => {*/}
        {/*    async function search() {*/}
        {/*        const result = await axios.get("http://localhost:8080/api/items?name=" + data.text)*/}
        {/*        */}
        {/*    }*/}
        {/*    search()*/}
        {/*}}>*/}
        {/*    <input className="form-control mb-3" name="text"/>*/}
        {/*    <button className="btn btn-primary">Search</button>*/}
        {/*</Formik>*/}

        <table className="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {itemList.map(item => (<tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>{item.type.name}</td>
                <td><Link to={"/service/edit/" + item.id} className="btn btn-primary">Edit</Link></td>
            </tr>))}
            </tbody>
        </table>
    </div>)
}