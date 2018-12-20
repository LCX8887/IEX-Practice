import React from "react";
import { Card, Row, Col } from "antd";
import classNames from "classnames";
import { Link } from "react-router-dom";

const SectorSummary = ({ name, performance, background }) => {
  const performancePercent = (performance * 100).toFixed(2) + "%";
  const performancePercentClassName = classNames({
    green: performance > 0,
    red: performance < 0
  });
  return (
    <Link to={`/sectors/${name}`}>
      <Card
        className="SectorSummary"
        hoverable={true}
        cover={<img src={background} />}
      >
        <p>{name}</p>
        <p className={performancePercentClassName}>{performancePercent}</p>
      </Card>
    </Link>
  );
};
export default SectorSummary;
