import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Radio } from "antd";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";

class SymbolChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getDataFilter = str => {
    let dataFilter = {
      type: "pick",
      key: "symbol",
      value: "average"
    };
    if (str === "1D") {
      dataFilter.fields = ["label", "average"];
    } else {
      dataFilter.fields = ["date", "close"];
    }
    return dataFilter;
  };

  render() {
    const ds = new DataSet();
    const dataFilter = this.getDataFilter(this.props.selectedRange);
    const dv = ds
      .createView()
      .source(this.props.chartData)
      .transform(dataFilter)
      .transform({
        type: "filter",
        callback(row) {
          return row.average !== -1;
        }
      });
    const cols = {
      average: { range: [0, 1] }
    };
    return (
      <div className="SymbolChart">
        <Chart height={300} data={dv} forceFit={true}>
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <View scale={cols} data={dv}>
            <Geom
              type="line"
              position={dataFilter.fields[0] + "*" + dataFilter.fields[1]}
              size={2}
              color="#af3232"
            />
          </View>
        </Chart>
        <Radio.Group defaultValue="1D">
          {this.props.chartRange.map(r => (
            <Radio.Button value={r} onClick={this.props.handleChartChange}>
              {r}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
    );
  }
}

SymbolChart.propTypes = {};
SymbolChart.defaultProps = {};

export default SymbolChart;
