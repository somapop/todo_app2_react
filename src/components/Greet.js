import React from "react"


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

    const styles = {
        color: "#FFF", 
        backgroundColor: "#E96969", 
        textAlign: "center", 
        padding: 20, 
        borderRadius: 10 

    }

    return (
        <h2 style={styles}>Good {timeOfDay}!</h2>
    )
}


export default Greet