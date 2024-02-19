import {useEffect, useState} from "react";
import {findAll} from "../service/CustomerService";

export function CustomerList() {
    let setCustomers;
    let customers;
    [customers, setCustomers] = useState([]);
    useEffect(() => {
        async function fetchApi() {
            try {
                const customers = await findAll()
                console.log("Fetching customer list")
                setCustomers(customers)
            } catch (e) {
                console.log(e)
            }
        }

        fetchApi()
    },[])

    return (<>
        <div className="container-fluid">
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    </>)
}