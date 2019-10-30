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

    return (
        <h2 style={{ color: "#FFF", backgroundColor: "#E96969", textAlign: "center", padding: 20, borderRadius: 10 }}>Good {timeOfDay}!</h2>
    )
}

export default Greet