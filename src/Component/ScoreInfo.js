import React, { useState } from "react"
import { Card } from "react-bootstrap";

const ScoreInfo = ({ name, value, status }) => {
    return (
        <div className="score-card"><div>{name}</div><div className={status ? "green-color" : "red-color"}>{value}</div></div>
    )
}

export default ScoreInfo