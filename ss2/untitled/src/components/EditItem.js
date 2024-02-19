import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {Blocks, CirclesWithBar, RevolvingDot} from "react-loader-spinner";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function EditItem() {
    const navigate = useNavigate();
    const param = useParams()
    let [item, setItem] = useState({})
    let [types, setTypes] = useState([])
    const [loading, setLoading] = useState(true)

    const notify = () => toast.success("Save succeed!", {position: "top-center"});
    useEffect(() => {
        async function getServiceById(id) {
            try {
                let result = await axios.get("http://localhost:8080/api/items/" + id);
                let types = await axios.get("http://localhost:8080/api/types");
                console.log(result.data)
                setItem(result.data)
                setTypes(types.data)
                setLoading(false)
            } catch (e) {
                // console.log(e)
            }
        }

        getServiceById(param.id)
    }, []);

    async function save(data) {
        data.type = {id: data.type}
        const result = await axios.patch("http://localhost:8080/api/items/add", data)
        console.log(result)
    }

    return loading ? <Blocks/> : (<>
        <div className="container-fluid">
            <h1>Edit Item</h1>
            <Formik
                initialValues={
                    {
                        id: item.id,
                        name: item.name,
                        date: item.date,
                        amount: item.amount,
                        type: item.type.id,
                    }
                }
                enableReinitialize
                onSubmit={async (data) => {
                    await save(data)
                    notify()
                    navigate("/")
                }}>
                <Form>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Name</label>
                        <Field type="text" className="form-control" id="name" name="name"></Field>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="date">Date</label>
                        <Field type="date" className="form-control" id="date" name="date"></Field>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="amount">Amount</label>
                        <Field type="number" className="form-control" id="amount" name="amount"></Field>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="type">Type</label>
                        <Field as="select" className="form-select" name="type">
                            {types.map((type) => (
                                <option key={type.id}
                                        value={type.id}>{type.name}</option>
                            ))}
                        </Field>
                    </div>
                    <button type="submit" className="btn btn-outline-success">Save</button>
                </Form>
            </Formik>
        </div>
    </>)
}