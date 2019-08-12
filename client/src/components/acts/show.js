import React, { useState, useEffect } from "react";
import Axios from "axios";

const stylesPage =  {
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const h1 = {
    color: 'white',
    textShadow: '#fcfcfc',
    fontSize: '5rem',
  }

  const h2 = {
    color: 'white',
    textShadow: '#fcfcfc',
    fontSize: '2rem',
  }

function Show(props) {
    const [act, setAct] = useState( [] );

    useEffect(() => {
        Axios.get(`/api/acts/${props.match.params.id}`)
        .then(result => setAct(result.data))
        .catch(err => console.error(err));
    }, [props]);

    return(
        <div style={stylesPage} className="act">
        <div className="container">
            <header>
                <h1 style={h1}>{act.title}</h1>
            </header>

            <div style={h2}>
                {act.content}
            </div>
        </div>
        </div>
    );
}

export default Show;