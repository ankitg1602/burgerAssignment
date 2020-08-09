import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import ScoreInfo from "./../Component/ScoreInfo"

const Packs = ({ packsData = [] }) => {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Packs Available
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>{packsData.map(name => <div>{name}</div>)}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default Packs