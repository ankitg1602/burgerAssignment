import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ScoreInfo from "./../Component/ScoreInfo"

const ScoreInfos = ({ scoresData = [] }) => {
    return (
        scoresData.map(({ name, value, is_positive_correlation }) => <ScoreInfo name={name} value={value} status={is_positive_correlation} />)
    )
}

export default ScoreInfos