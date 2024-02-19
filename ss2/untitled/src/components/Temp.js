export function Temp(){
    function deleteModal(title) {
        document.getElementById("deleteModalLabel").innerText = "Delete " + title + " ?"
    }
    return(<>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>

        <button className="btn btn-danger ms-2" data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                onClick={() => deleteModal()}>Delete
        </button>

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
    </>)
}