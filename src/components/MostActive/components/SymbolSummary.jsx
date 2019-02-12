import React from "react";
import { Card } from "antd";
import classNames from "classnames";
import { Link } from "react-router-dom";

const SymbolSummary = ({ symbol, name, price, change }) => {
  const title = (
    <div>
      <h3>{symbol}</h3>
      <h3>{name}</h3>
    </div>
  );
  const changePercent = (change * 100).toFixed(2) + "%";
  const changePercentClassName = classNames({
    green: change > 0,
    red: change < 0
  });
  return (
    <Link rel={symbol} to={`/stocks/${symbol}`}>
      <Card
        className="SymbolSummary"
        title={title}
        bordered={false}
        hoverable={true}
      >
        <p>{price}</p>
        <p className={changePercentClassName}>{changePercent}</p>
      </Card>
    </Link>
  );
};
export default SymbolSummary;
