import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
    const [act, setAct] = useState( [] );

    useEffect(() => {
        Axios.get(`/api/acts/${props.match.params.id}`)
        .then(result => setAct(result.data))
        .catch(err => console.error(err));
    }, [props]);

    return(
        <div className="container">
            <header>
                <h1>{act.title}</h1>
            </header>

            <div>
                {act.content}
            </div>
        </div>
    );
}

export default Show;