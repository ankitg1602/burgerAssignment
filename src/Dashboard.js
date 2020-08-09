import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Filters from "./component/Filters.js";
import ScoreInfos from './component/ScoreInfos';
import Packs from './component/Packs';
import KeyBoardInfo from './component/KeyBoardInfo';
import TableFilters from "./component/TableFilters";
import logo from './shared/rsz_interview.jpg';
import "./index.css";
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

  getCount = () => {
    let tempObj = {}; //{"high": 4, ""}
    this.state.tableData.forEach((obj) => {
      if (!tempObj[obj.importance]) {
        tempObj[obj.importance] = 1
      } else {
        tempObj[obj.importance] += 1
      }
    })
    return tempObj
  }

  render() {
    let { actualTableData } = this.state;
    const { serp_packs } = keyword_information_box

    return (
      <div className="container">
        <img src={logo} alt="Logo" class="width-100" />
        <Filters onSearch={(keyWord) =>
          this.setState({
            keyWord
          })
        } />
        <div>KeyWord: "{this.state.keyWord}" <Button>Non - Branded</Button></div>
        <div className="child-container">
          <div className="width-17" >
            <KeyBoardInfo data={keyword_information_box} />
            <Packs packsData={serp_packs} />
          </div>
          <div className="table-container">
            <TableFilters data={this.getCount()} onFilter={(selectedLabel) => this.onFilter(selectedLabel)} totalCount={this.state.tableData.length} />
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

