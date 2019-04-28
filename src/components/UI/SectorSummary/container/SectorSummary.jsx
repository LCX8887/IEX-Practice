import React from 'react';
import { Card, Row, Col } from 'antd';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const SectorSummary = ({ name, performance, background }) => {
  const performancePercent = (performance * 100).toFixed(2) + '%';
  const performancePercentClassName = classNames({
    green: performance > 0,
    red: performance < 0,
    SectorPerformance: true,
  });
  const divStyle = {
    backgroundImage: 'url(' + background + ')',
  };
  return (
    <Link to={`/sectors/${name}`}>
      <div className="SectorSummary">
        <img alt={name} src={background} />
        <p class="SectorName">{name}</p>
        <div className="wrapper">
          <p className={performancePercentClassName}>{performancePercent}</p>
        </div>
      </div>
    </Link>
  );
};
export default SectorSummary;
