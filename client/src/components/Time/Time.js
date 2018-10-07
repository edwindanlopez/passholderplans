import React from "react";

const Time = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>
        {props._id}
        {props.waitTime}
        {props.active}
        {props.fastPass}
        {props.fastPassReturnTime}
        {props.status}
        {props.lastUpdate}
        {props.schedule}
        </p>
    </div>
)

export default Time;