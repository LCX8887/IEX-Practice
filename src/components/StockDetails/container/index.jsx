import React, { Component } from "react";
import { connect } from "react-redux";
import SymbolChart from "../component/SymbolChart";
import SymbolHeader from "../component/SymbolHeader";
import SymbolProfile from "../component/SymbolProfile";
import { fetchSymbolDetails, fetchChart } from "../flow/actions";
import {
  addToWatchList,
  delFromWatchList,
} from "../../../store/global/actions";
import { Layout, Row, Col } from "antd";
const { Header, Footer, Content, Sider } = Layout;

class StockDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartRange: ["1D", "1M", "3M", "6M", "YTD", "1Y", "2Y", "5Y"],
      selectedRange: "1D",
    };
  }
  componentDidMount() {
    this.props.fetchSymbolDetails(this.props.selectedSymbol);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.selectedSymbol !== this.props.selectedSymbol) {
      this.props.fetchSymbolDetails(this.props.selectedSymbol);
    }
  }
  triggerWatchList = (e) => {
    e.preventDefault();
    const selected =
      this.props.watchList.indexOf(this.props.quote.symbol) >= 0 ? true : false;
    if (selected) {
      this.props.delFromWatchList(this.props.quote.symbol);
    } else {
      this.props.addToWatchList(this.props.quote.symbol);
    }
  };

  handleChartChange = (e) => {
    this.setState({
      selectedRange: e.target.value,
    });
    this.props.fetchChart(this.props.selectedSymbol, e.target.value);
  };
  render() {
    const { quote, book, company, chart, peers, watchList } = this.props;
    const { selectedRange, chartRange } = this.state;
    return (
      <div className="StockDetailsContent">
        <SymbolHeader
          quote={quote}
          watchList={watchList}
          triggerWatchList={this.triggerWatchList}
        />
        <SymbolChart
          chartData={chart}
          chartRange={chartRange}
          selectedRange={selectedRange}
          handleChartChange={this.handleChartChange}
        />
        <SymbolProfile company={company} quote={quote} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  quote: state.StockDetailsReducer.quote,
  book: state.StockDetailsReducer.book,
  company: state.StockDetailsReducer.company,
  chart: state.StockDetailsReducer.chart,
  peers: state.StockDetailsReducer.peers,
  watchList: state.global.watchList,
});

const mapDispatchToProps = {
  fetchSymbolDetails,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockDetails);
