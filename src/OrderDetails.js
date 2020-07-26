import React from "react";
import { Button } from "react-bootstrap";

export default function OrderDetails() {
  return (
    <div>
      <div>
        <Button
          onClick={() =>
            this.setState({
              showForm: true,
            })
          }
        >
          Back
        </Button>
        <input
          type="text"
          placeholder="search by name"
          onChange={(e) =>
            this.setState({
              searchName: e.target.value,
            })
          }
        />
        <Button onClick={() => this.searchByName()}>Search</Button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Burger</th>
              <th>Salad</th>
              <th>Cheese</th>
              <th>Cutlet</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {this.state.totalOrder.map(
              ({ name, bun, salad, cheese, cutlet, totalCost }) => {
                return (
                  <tr>
                    <th>{name}</th>
                    <th>{bun}</th>
                    <th>{salad}</th>
                    <th>{cheese}</th>
                    <th>{cutlet}</th>
                    <th>{totalCost}</th>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        <h4>Total Order: {this.getTotalOrder()}</h4>
      </div>
    </div>
  );
}
