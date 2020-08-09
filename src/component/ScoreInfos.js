import React from "react";
import ScoreInfo from "./../component/ScoreInfo"

const ScoreInfos = ({ scoresData = [] }) => {
    return (
        scoresData.map(({ name, value, is_positive_correlation }) => <ScoreInfo name={name} value={value} status={is_positive_correlation} />)
    )
}

export default ScoreInfos