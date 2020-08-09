import React, { useState } from "react"
import { Card } from "react-bootstrap";

const ScoreInfo = ({ data, onFilter, totalCount }) => {
    return (
        <div className="width100">
            <div>Importance</div>
            <div className="width100">
                <a onClick={() => onFilter('all')} className="margin0-10">{totalCount}</a>
                <div>Total</div>
            </div>
            {Object.keys(data).map((label) => {
                return <div className="width100">
                    <a onClick={() => onFilter(label)} className="margin0-10">{data[label]}</a>
                    <div>{label.toUpperCase()}</div>
                </div>
            })}
        </div>
    )
}

export default ScoreInfo