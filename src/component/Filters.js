import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

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
        return (
            <Form className="filter-form">
                <Form.Control placeholder="Search By Name" name="searchByName" onChange={(e) => this.setState({
                    [e.target.name]: e.target.value
                })} />
                <Button variant="primary" onClick={() => this.onSearch()}>Go</Button>
            </Form>
        )
    }
}

export default Filters