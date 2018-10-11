import axios from "axios";

//check export against example to make sure export is done correctly
export default {
    getWaitTimes: function () {
        //put the switch statement within this function
        // switch(id){
        //     case "magic-kingdom":
        //         return axios.get("/waitTimes-api/magic-kingdom");
        //     case "epcot":
        //         return axios.get("/waitTimes-api/epcot");
        //     case "hollywood-studios":
        //         return axios.get("/waitTimes-api/hollywood-studios");
        //     case "animal-kingdom":
        //         return axios.get("/waitTimes-api/animal-kingdom");
        //     default:
        //         //find all version
        //         return axios.get("/waitTimes-api");
        // }
        return axios.get("/waitTimes-api");
        
    }
};
//switch statement
//default method would be to search all
//need some way to get input from user about which park
//you'll pass that park id through the switch statement and use it to return a different call. 