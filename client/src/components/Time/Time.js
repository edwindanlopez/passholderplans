import React from "react";

const Time = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>
        {props._id}
        {props.waitTime}
        {props.status}
        </p>
    </div>
)

export default Time;