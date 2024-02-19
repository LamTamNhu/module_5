import {useEffect, useState} from "react";
import {findAll, findByName} from "../service/ItemService";
import {createSearchParams, Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export function ItemList() {
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        async function fetchApi() {
            try {
                const listUpdated = await findAll()
                setItemList(listUpdated)
            } catch (e) {
                console.log(e)
            }
        }

        fetchApi()
    }, []);
    return (<div className="container-fluid my-3">
        <Formik
            initialValues={{text: ""}}
            onSubmit={async (data) => {
                console.log(data.text)
                const result = await findByName(data.text)
                setItemList(result)
            }}>
            <Form>
                <div className="col-5">
                    <Field className="form-control mb-3" name="text"/>
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </Form>
        </Formik>

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