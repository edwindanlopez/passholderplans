import React from "react";
import "./parkSelect.css";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

const ParkSelect = props => (
    <div>
        <div className="collection">
            <h3 className="center-text">Pick a Park!</h3>
            <a onClick={props.handleParkClick} type="text" href="#attractions" className="btn collection-item">Magic Kingdom</a>
            <a onClick={props.handleParkClick} type="text" href="#attractions" className="btn collection-item">Epcot</a>
            <a onClick={props.handleParkClick} type="text" href="#attractions" className="btn collection-item">Hollywood Studios</a>
            <a onClick={props.handleParkClick} type="text" href="#attractions" className="btn collection-item">Animal Kingdom</a>
        </div>
    </div>
);

export default ParkSelect;