import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import ReactTable from "react-table";

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
      // columns: [
      //   {
      //     Header: "Name",
      //     accessor: "name",
      //   },
      //   {
      //     Header: "Bun",
      //     accessor: "bun",
      //   },
      //   {
      //     Header: "Salad",
      //     accessor: "salad",
      //   },
      //   {
      //     Header: "Cheese",
      //     accessor: "cheese",
      //   },
      //   {
      //     Header: "cutlet",
      //     accessor: "cutlet",
      //   },
      //   {
      //     Header: "totalCost",
      //     accessor: "totalCost",
      //   },
      // ],
    };
  }
  //   Use Case:
  // * User comes to a burger joint and orders a burger
  // * User can choose the ingredients for his burger. The ingredients are Bun, Salad, Cheese Slices and Cutlets
  // * The app should have the following features
  // * Order a burger with mix of ingredients.
  // * List All ordered burgers along with price.
  // * Create a service for burger price calculation and  total Sale
  // * Search All burgers by Person name, total  total sale by person
  // Sample Input may look like this
  // Order Burger with the following option
  // Name or guy who order
  // Bun = 2 (fix price Rs 5 each bun)
  // salad = yes or no (price Rs 5)
  // Cheese Slices = (Rs 1 per slice)
  // cutlets = (Rs 2 per piece)
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
    const { name, bun, salad, cheese, cutlet, totalCost } = this.state;
    if (!name) {
      alert("Please enter the name");
      return;
    }

    this.setState({
      showForm: false,
      totalOrder: [
        ...this.state.totalOrder,
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
    });
    this.props.history.push("/order-details");
    console.log("this.state", this.state);
  };

  //   onSalad = (e) => {
  //     if (e.target.checked) {
  //         this.setState({
  //             [e.target.name]: e.target.value
  //         })
  //     }
  //   }
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
  onSort = () => {
    this.state.totalOrder.sort((a, b) => a.name - b.name);
    this.setState({
      totalOrder: [...this.state.totalOrder],
    });
  };
  searchByName = () => {
    if (!this.state.searchName) {
      this.setState({
        totalOrder: [...this.state.totalOrder],
      });
      return;
    }
    let totalOrder = this.state.totalOrder.filter((obj) => {
      return obj.name === this.state.searchName;
    });
    this.setState({
      totalOrder: [...totalOrder],
    });
    //   this.state.totalOrder.indexOf(this.state.sea)
  };
  render() {
    return (
      <>
        {this.state.showForm ? (
          <div>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <input
                  type="text"
                  placeholder="xyz"
                  onChange={(e) => this.onClick(e)}
                  name="name"
                  // value={this.state.name}
                />
              </Form.Group>
              {/* <Form.Group controlId="exampleForm.ControlSelect1"> */}
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
            <h3>Burger cost is: {this.state.bun * 5}</h3>
            <h4>Salad Price: {this.state.salad * 5}</h4>
            <h4> Cheese Slices = {this.state.cheese * 1}</h4>
            <h4>cutlets = {this.state.cutlet * 2}</h4>
            <h4>Total Cost is {this.getTotalCost()}</h4>
          </div>
        ) : (
          <div></div>
          // <div>
          //   <Button
          //     onClick={() =>
          //       this.setState({
          //         showForm: true,
          //       })
          //     }
          //   >
          //     Back
          //   </Button>
          //   <input
          //     type="text"
          //     placeholder="search by name"
          //     onChange={(e) =>
          //       this.setState({
          //         searchName: e.target.value,
          //       })
          //     }
          //   />
          //   <Button onClick={() => this.searchByName()}>Search</Button>
          //   <table>
          //     <thead>
          //       <tr>
          //         <th>Name</th>
          //         <th>Burger</th>
          //         <th>Salad</th>
          //         <th>Cheese</th>
          //         <th>Cutlet</th>
          //         <th>Total Cost</th>
          //       </tr>
          //     </thead>
          //     <tbody>
          //       {this.state.totalOrder.map(
          //         ({ name, bun, salad, cheese, cutlet, totalCost }) => {
          //           return (
          //             <tr>
          //               <th>{name}</th>
          //               <th>{bun}</th>
          //               <th>{salad}</th>
          //               <th>{cheese}</th>
          //               <th>{cutlet}</th>
          //               <th>{totalCost}</th>
          //             </tr>
          //           );
          //         }
          //       )}
          //     </tbody>
          //   </table>
          //   <h4>Total Order: {this.getTotalOrder()}</h4>
          // </div>
        )}
      </>
    );
  }
}

export default UserForm;
