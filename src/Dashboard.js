import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Filters from "./Component/Filters.js";
import SearchTable from "./Component/SearchTable"
import "./index.css";
import ScoreInfos from './Component/ScoreInfos';
import Packs from './Component/Packs';
import KeyBoardInfo from './Component/KeyBoardInfo';
import TableFilters from "./Component/TableFilters";
import logo from './shared/rsz_interview.jpg';
const keyword_information_box = require('./shared/keyword_information_box.json');
const keyword_model_score = require('./shared/keyword_model_score.json');


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyWord: 'Auto Discount',
      tableData: [],
      actualTableData: [],
    }
  }

  onFilter = (label) => {
    let filteredData = this.state.tableData;
    if (label !== 'all') {
      filteredData = this.state.tableData.filter(obj => obj.importance === label);
    }

    this.setState({
      actualTableData: [...filteredData]
    })
  }


  componentDidMount() {
    this.setState({
      tableData: keyword_model_score.parameters,
      actualTableData: keyword_model_score.parameters
    })
  }

  render() {
    let { actualTableData } = this.state;
    let tempObj = {};
    this.state.tableData.forEach((obj) => {
      if (!tempObj[obj.importance]) {
        tempObj[obj.importance] = 1
      } else {
        tempObj[obj.importance] += 1
      }
    })
    const { serp_packs } = keyword_information_box
    return (
      <div style={{ margin: "20px" }}>
        <img src={logo} alt="Logo" style={{ width: '100%' }} />
        <Filters onSearch={(keyWord) =>
          this.setState({
            keyWord
          })
        } />
        <div>KeyWord: "{this.state.keyWord}" <Button>Non - Branded</Button></div>
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ width: "17rem" }} >
            <KeyBoardInfo data={keyword_information_box} />
            <Packs packsData={serp_packs} />
          </div>
          <div className="table-container">
            <TableFilters data={tempObj} onFilter={(selectedLabel) => this.onFilter(selectedLabel)} totalCount={this.state.tableData.length} />
            <ScoreInfos scoresData={actualTableData} />
          </div>
        </div>
        <div>
        </div>
      </div >
    );
  }
}

export default Dashboard

