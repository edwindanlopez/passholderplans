import React, { Component } from "react";
import "./attractions.css";
import Navigation from '../../components/Navigation';
import Time from '../../components/Time'
import API from "../../utils/API";

class Attractions extends Component {
    state = {
        waitTimes: []
    };

    componentDidMount() {
        this.waitTimesInfo();
    }

    waitTimesInfo = () => {
        API.getWaitTimes({})
            .then(res =>
                this.setState({
                    waitTimes: res.data
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Navigation handleLogout={this.props.handleLogout} auth={this.props.auth.username} />

                <div className="container">
                    <h1>These are the attractions that you're seeing now</h1>
                    {this.props.auth.username}
                    {this.state.waitTimes.map(waitTime => (
                        <Time
                            key={waitTime._id}
                            _id={waitTime._id}
                            name={waitTime.name}
                            waitTime={waitTime.waitTime}
                            active={waitTime.active}
                            fastPass={waitTime.fastPass}
                            fastPassReturnTime={waitTime.fastPassReturnTime}
                            status={waitTime.status}
                            lastUpdate={waitTime.lastUpdate}
                            schedule={waitTime.schedule}
                        />
                    
                    ))}
                </div>
            </div>
        );
    }
};

export default Attractions;