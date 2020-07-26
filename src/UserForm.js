import React, { Component } from "react";
import { Form, Button, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      searchName: "",
      name: "",
      bun: 2,
      salad: "",
      cheese: "",
      cutlet: "",
      totalOrder: [],
      showForm: true,
      totalCost: 0,
    };
  }

  onClick = (e) => {
    console.log("e.target:", e.target, e.target.value, e.target.checked);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSaladChange = (e) => {
    let value = 0;
    if (e.target.checked) {
      value = 1;
    }
    this.setState({
      [e.target.name]: value,
    });
  };

  onSubmit = () => {
    const { name, bun, salad, cheese, cutlet } = this.state;
    if (!name) {
      alert("Please enter the name");
      return;
    }

    let totalOrder = localStorage.getItem("totalOrder");
    if (totalOrder) {
      totalOrder = JSON.parse(totalOrder);
    } else {
      totalOrder = [];
    }
    this.setState(
      {
        showForm: false,
        totalOrder: [
          ...totalOrder,
          {
            name: name,
            bun,
            salad,
            cheese,
            cutlet,
            totalCost: this.getTotalCost(),
          },
        ],
        name: "",
        bun: 2,
        salad: "",
        cheese: "",
        cutlet: "",
        totalCost: "",
      },
      () => {
        this.props.history.push({
          pathname: "/order-details",
        });
        localStorage.setItem(
          "totalOrder",
          JSON.stringify(this.state.totalOrder)
        );
      }
    );
  };

  getTotalOrder = () => {
    let order = 0;
    this.state.totalOrder.forEach((obj) => {
      order += obj.totalCost;
    });
    return order;
  };
  getTotalCost = () => {
    let totalCost =
      this.state.bun * 5 +
      this.state.salad * 5 +
      this.state.cheese * 1 +
      this.state.cutlet * 2;

    return totalCost;
  };

  searchByName = () => {
    if (!this.state.searchName) {
      this.setState({
        totalOrder: [...this.state.totalOrder],
      });
      return;
    }
    let totalOrder = this.state.totalOrder.filter((obj) => {
      return obj.name.includes(this.state.searchName);
    });
    this.setState({
      totalOrder: [...totalOrder],
    });
  };
  render() {
    return (
      <div>
        <Card style={{ margin: "20px" }}>
          <Form
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Form.Group
              controlId="exampleForm.ControlInput1"
              id="formGridCheckbox"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="xyz"
                onChange={(e) => this.onClick(e)}
                name="name"
              />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Label>Bun</Form.Label>
              <Form.Control
                type="text"
                placeholder="2"
                value={this.state.bun}
                disabled
              />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Label></Form.Label>
              <Form.Check
                type="checkbox"
                label="salad"
                name="salad"
                onChange={this.onSaladChange}
              />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Label>Cheese Slices</Form.Label>
              <Form.Control
                type="number"
                name="cheese"
                onChange={this.onClick}
                // value={this.state.cheese}
              />
            </Form.Group>
            <Form.Group id="formGridCheckbox">
              <Form.Label>Cutlets</Form.Label>
              <Form.Control
                type="number"
                name="cutlet"
                onChange={this.onClick}
              />
            </Form.Group>
            <Button onClick={this.onSubmit}>Submit</Button>
          </Form>
        </Card>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Burger cost is: {this.state.bun * 5}
            </ListGroup.Item>
            <ListGroup.Item>Salad Price: {this.state.salad * 5}</ListGroup.Item>
            <ListGroup.Item>
              Cheese Slices = {this.state.cheese * 1}
            </ListGroup.Item>
            <ListGroup.Item>cutlets = {this.state.cutlet * 2}</ListGroup.Item>
            <ListGroup.Item>Total Cost is {this.getTotalCost()}</ListGroup.Item>
          </ListGroup>
        </Card>
        {/* <h3>Burger cost is: {this.state.bun * 5}</h3>
        <h4>Salad Price: {this.state.salad * 5}</h4>
        <h4> Cheese Slices = {this.state.cheese * 1}</h4>
        <h4>cutlets = {this.state.cutlet * 2}</h4>
        <h4>Total Cost is {this.getTotalCost()}</h4> */}
      </div>
    );
  }
}

export default UserForm;
