import React from "react";
import logo from '../images/tasq_logo_6.png';


function Greet() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "evening"
    }

    //const width = '80%';
    const styles = {
        color: "#FFF",
        backgroundColor: "#E96969",
        textAlign: "center",
        width: 250,
        padding: 20,
        borderRadius: 10,
        fontFamily: "Montserrat",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "right",
        flexFlow: "row wrap",
        //display: [
        //'-webkit-box',
        //'-webkit-flex',
        //'-ms-flexbox',
        //'flex'
        // ],


    }

    return (
        <div className="row ToDoRow top-buffer d-flex justify-content-center">
            <a className="funkybutton">
           
        

            <h2 style={styles} >Good {timeOfDay}!</h2></a>
        </div>

    )
}


export default Greet