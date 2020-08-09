import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import ScoreInfo from "./../Component/ScoreInfo"

const KeyBoardInfo = ({ data }) => {
    const { highest_rank, search_volume, theme_list } = data

    return (
        <Card>
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>HIGHEST RANK <span>{highest_rank}</span></ListGroup.Item>
                    <ListGroup.Item>SEARCH VOLUME <span>{search_volume}</span></ListGroup.Item>
                    <ListGroup.Item>THEME {theme_list.map(name => <div>{name}</div>)} </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default KeyBoardInfo