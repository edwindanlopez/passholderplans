import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";


class Time extends Component{

    state = {
        picked: [],
        "data-switch": "",
        "data-count": 0
    };


    trackCount = (event) => {

        let active = event.target.getAttribute("data-switch");
        console.log("The initial state of active was: " + active);

        let count = event.target.getAttribute("data-count");
        console.log("The initial count is: " + count);

        //This tracks wether the state of the toggle is active or not.
        if (active == "false" && count == 0){

            console.log("First block executing" + "\n" + "Active is: " + active + "\n" + "Count is: " + count + "---------------------------");

            //Activate & add count
            active = true;
            count ++

            console.log("New active is: " + active + ", New count is: " + count)


            //----------------------------------------
            //Targets the element that was clicked on
            const elem = event.target
            setDataAttributes(elem,
                {
                    "data-switch": active
                },
                {
                    "data-count": count
                },
            );
            
            //Helper function for setting multiple data attributes
            function setDataAttributes(el, attrs) {
                for(const key in attrs) {
                    el.setAttribute(key, attrs[key]);
                }
            }
            //----------------------------------------


            console.log("active is now: " + active);
            console.log("count is now: " + count);


            console.log("This is the event target: " + event.target.getAttribute("data-switch"));
            console.log("This is the event target: " + event.target.getAttribute("data-count"));

            //Destructuring the event.target to set state with it's data
            let { dataset: {"data-switch": active}, value } = event.target.dataset;   
            // Set the state for the appropriate input field
            this.setState({
            [this.dataset]: value
            });

            console.log("This is the state: " + JSON.stringify(this.state));


        } else if(active == "true"){
            console.log("Second block executing");
            active = false;
            event.target.setAttribute("data-switch", active);
            console.log("active is now: " + active);
            return active;
        }
        
    }

    //-----------------------------------------------------

    render() {
        return (
            <div>
                {/* <p>
                {"Name: " + props.name + " --- "}
                {"ID: " + props._id  + " --- "}
                {"Wait Time: " + props.waitTime  + " --- "}
                {"Status: " + props.status + "\n"}
                </p> */}

                <ul className="collection">
                    <li className="collection-item avatar">
                        <i className="material-icons circle">drag_handle</i>
                        <span className="title">{this.props.name}</span>
                        <p>{"ID: " + this.props._id}</p>
                        <p>{"Wait Time: " + this.props.waitTime}</p>
                        <p>{"Status: " + this.props.status}</p>
                        <div className="secondary-content">
                            <div className="switch">
                                <label>
                                    {/* Off */}
                                    <input id="switch-state" name="switch" 
                                    data-switch={false} data-count={0}
                                    type="checkbox" onClick={this.trackCount}/>
                                    <span className="lever"></span>
                                    {/* On */}
                                </label>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Time;