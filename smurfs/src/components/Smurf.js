import React from "react";
import "./Smurf.scss";

function Smurf(props) {
    return (
        <div className="smurf">
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            <button>DELETE</button>
        </div>
    )
}

export default Smurf;