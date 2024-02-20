import {useEffect, useState} from "react";
import {deleteById, findAll, findByName} from "../service/ItemService";
import {createSearchParams, Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {toast} from "react-toastify";


export function ItemList() {
    const [itemList, setItemList] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        async function fetchApi() {
            try {
                console.log("updated!")
                const listUpdated = await findAll()
                setItemList(listUpdated)
            } catch (e) {
                console.log(e)
            }
        }

        fetchApi()
    }, [update]);
    const notifyDelete = () => toast.success("Delete succeed!", {position: "top-center"});

    function deleteModal(item) {
        document.getElementById("deleteModalLabel").innerText = "Delete " + item.name + " at id:" + item.id + " ?"
        document.getElementById("deleteBtn").onclick = () => deleteItem(item.id)
    }

    async function deleteItem(id) {
        try {
            await deleteById(id)
            notifyDelete()
            setUpdate(!update)
        } catch (e) {
            console.log(e)
        }
    }

    return (<div className="container-fluid my-3">
        <Formik
            initialValues={{text: ""}}
            onSubmit={async (data) => {
                console.log(data.text)
                const result = await findByName(data.text)
                setItemList(result)
                if (result.length === 0) {
                    document.getElementById("message").innerText = "No match found."
                }
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
                <td>
                    <Link to={"/service/edit/" + item.id} className="btn btn-primary me-3">Edit</Link>
                    <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal"
                            onClick={() => deleteModal(item)}>Delete
                    </button>
                </td>
            </tr>))}
            </tbody>
        </table>

        <p className="text-danger" id="message"></p>

        {/*Modal*/}
        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="deleteModalLabel">Delete</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body" id="deleteModalBody">
                        Confirm delete?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button id="deleteBtn" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}