import {useEffect, useState} from "react";
import {findAll} from "../service/ServService";
import {Link} from "react-router-dom";
import {EditServ} from "./EditServ";

export function ServList() {
    let setServices;
    let services;
    [services, setServices] = useState([]);
    useEffect(() => {
        async function fetchApi() {
            try {
                const services = await findAll()
                console.log("At component: ")
                console.log(services)
                setServices(services)
            } catch (e) {
                console.log(e)
            }
        }

        fetchApi()
    }, []);

    function deleteModal(title) {
        document.getElementById("deleteModalLabel").innerText = "Delete " + title + " ?"
    }

    return (
        <>
            <div className="container-fluid">
                <Link className="btn btn-primary mb-3" to="/service/create">Add service</Link>
                <div className="row">
                    {
                        services.map((service) => (
                            <div key={service.id} className="col-sm-6 col-md-3 mb-4">
                                <div className="card">
                                    <img src={service.thumbnailUrl} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                    </div>
                                    <div className="d-flex justify-content-end p-2">
                                        <Link to={"/service/edit/" + service.id} className="btn btn-info">Edit</Link>
                                        <button className="btn btn-danger ms-2" data-bs-toggle="modal"
                                                data-bs-target="#deleteModal"
                                                onClick={() => deleteModal(service.title)}>Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
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
                        <div class="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <a className="btn btn-danger">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}