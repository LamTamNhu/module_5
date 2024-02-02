import {Field, Form, Formik} from "formik";

export function CreateServ() {
    return (<>
        <div className="container-fluid">
            <h1>New Serv</h1>
            <Formik initialValues={
                {
                    name: "",
                    area: "",
                    price: "",
                    maxCap: "",
                }

            } onSubmit={() => {
                console.log("Click")
            }}>
                <Form>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Name</label>
                        <Field type="text" className="form-control" id="name" name="name"></Field>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="area">Area</label>
                        <Field type="number" className="form-control" id="area" name="area"></Field>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="price">Price</label>
                        <Field type="number" className="form-control" id="price" name="price"></Field>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="maxCap">Maximum capacity</label>
                        <Field type="number" className="form-control" id="maxCap" name="maxCap"></Field>
                    </div>
                    <button type="submit" className="btn btn-outline-success">Save</button>
                </Form>
            </Formik>
        </div>
    </>)
}