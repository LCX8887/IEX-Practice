import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import SymbolHeaderBoard from "./SymbolHeaderBoard";
import classNames from "classnames";

class SymbolHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { quote, watchList, triggerWatchList } = this.props;
    const symbol = "(" + quote.symbol + ")";
    const change = quote.change > 0 ? "+" + quote.change : quote.change;
    const changePercent2 = (quote.changePercent * 100).toFixed(2) + "%";
    const changePercent =
      quote.changePercent > 0
        ? "(+" + changePercent2 + ")"
        : "(" + changePercent2 + ")";
    const extendedChange =
      quote.extendedChange > 0
        ? "+" + quote.extendedChange
        : quote.extendedChange;
    const extendedChangePercent2 =
      (quote.extendedChangePercent * 100).toFixed(2) + "%";
    const extendedChangePercent =
      quote.extendedChangePercent > 0
        ? "(+" + extendedChangePercent2 + ")"
        : "(" + extendedChangePercent2 + ")";
    const theme = watchList.indexOf(quote.symbol) >= 0 ? "filled" : "outlined";
    const changeClassName = classNames({
      green: quote.change > 0,
      red: quote.change < 0
    });

    const extendedChangeClassName = classNames({
      green: quote.extendedChange > 0,
      red: quote.extendedChange < 0
    });
    return (
      <div>
        <SymbolHeaderBoard
          companyName={quote.companyName}
          symbol={symbol}
          close={quote.close}
          change={change}
          changePercent={changePercent}
          latestTime={quote.latestTime}
          extendedPrice={quote.extendedPrice}
          extendedChange={extendedChange}
          extendedChangePercent={extendedChangePercent}
          previousClose={quote.previousClose}
          triggerWatchList={triggerWatchList}
          theme={theme}
          changeClassName={changeClassName}
          extendedChangeClassName={extendedChangeClassName}
        />
      </div>
    );
  }
}

SymbolHeader.propTypes = {};
SymbolHeader.defaultProps = {};

export default SymbolHeader;
