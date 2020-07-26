import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./index.css";

export default function OrderDetails(props) {
  const [totalOrders, setTotalOrders] = useState(
    JSON.parse(localStorage.getItem("totalOrder")) || []
  );
  const [orderTable, setOrderTable] = useState(
    JSON.parse(localStorage.getItem("totalOrder")) || []
  );
  function getTotalOrder() {
    let order = 0;
    orderTable.forEach((obj) => {
      order += obj.totalCost;
    });
    return order;
  }

  function searchByName(params) {
    let totalOrder = [...totalOrders];
    if (params) {
      totalOrder = totalOrders.filter((obj) => {
        return obj.name.toLowerCase().includes(params.toLowerCase());
      });
    }
    setOrderTable([...totalOrder]);
  }

  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => props.history.push("/")}
          style={{ margin: "5px 5px" }}
        >
          Back
        </Button>
        <input
          type="text"
          placeholder="search by name"
          style={{ margin: "5px 5px" }}
          onChange={(e) => searchByName(e.target.value)}
        />
      </div>
      <div>
        <table id="customers">
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
            {orderTable.map(
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
        <h4>Total Order: {getTotalOrder()}</h4>
      </div>
    </div>
  );
}
