import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
    const [acts, setActs] = useState( [] );

    useEffect(() => {
        Axios.get("/api/acts")
        .then(result => setActs(result.data))
        .catch(err => console.error(err));
    }, []);
    return (
        <div className="container">
            <header>
                <h1>All Acts</h1>
            </header>

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>User</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {acts.map(act => (
                            <tr key={act._id}>
                                <td>
                                    <Link to={`/acts/${act._id}`}>{act.title}</Link>
                                </td>
                                <td>{act.status}</td>
                                <td>{act.user && act.user.firstName}{" "} {act.user && act.user.lastName}</td>
                                <td>
                                    <Link to={`/acts/${act._id}/edit`}>Edit</Link> | 
                                    <Link to={`/acts/${act._id}/destroy`}> Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default Index;