import React, { Component } from 'react';
import { Form, Col, Row, Button } from "react-bootstrap";

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchByName: '',
        }
    }
    onSearch = () => {
        const { searchByName } = this.state
        this.props.onSearch(searchByName)
    }
    render() {
        const { options } = this.props
        return (
            <Form style={{ width: "100%", display: "flex", margin: "20px" }}>
                <Form.Control placeholder="Search By Name" name="searchByName" onChange={(e) => this.setState({
                    [e.target.name]: e.target.value
                })} />
                <Button variant="primary" onClick={() => this.onSearch()}>Go</Button>
            </Form>
        )
    }
}

export default Filters