import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Layout, Row, Col, Tag } from "antd";

const profileHead = [{ title: "Profile", value: "description" }];
const companyHead = [
  { title: "EXCHANGE", value: "exchange" },
  { title: "CEO", value: "CEO" },
  { title: "INDUSTRY", value: "industry" },
  { title: "SECTOR", value: "sector" },
  { title: "WEBSITE", value: "website" },
  { title: "TAGS", value: "tags" }
];
const quoteHead = [
  { title: "VOLUME", value: "latestVolume" },
  { title: "AVG DAILY VOLUME", value: "avgTotalVolume" },
  { title: "OPEN", value: "open" },
  { title: "CHANGE", value: "change" },
  { title: "52 WEEK HIGH", value: "week52High" },
  { title: "52 WEEK LOW", value: "week52Low" },
  { title: "MARKET CAP", value: "marketCap" },
  { title: "PREVIOUS CLOSE", value: "previousClose" },
  { title: "P/E RATIO", value: "peRatio" },
  { title: "YTD CHANGE", value: "ytdChange" },
  { title: "IEX VOLUME", value: "iexVolume" },
  { title: "IEX MKT SHARE", value: "iexMarketPercent" }
];

class SymbolProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="SymbolProfile">
        <Col span={12}>
          <Row>
            <h3>Profile</h3>
            <p>{this.props.company.description}</p>
          </Row>
          <Row className="details">
            {companyHead.map((c, index) => (
              <Col span={index > 4 ? 24 : 12} key={c.title}>
                <p className="title">{c.title}</p>
                {this.props.company[c.value] instanceof Array ? (
                  <p>
                    {this.props.company[c.value].map(a => (
                      <Tag>{a}</Tag>
                    ))}
                  </p>
                ) : (
                  <p className="value">{this.props.company[c.value]}</p>
                )}
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={12} className="details">
          {quoteHead.map((q, index) => (
            <Col span={12} key={q.title}>
              <p className="title">{q.title}</p>
              <p className="value">{this.props.quote[q.value]}</p>
            </Col>
          ))}
        </Col>
      </Row>
    );
  }
}

SymbolProfile.propTypes = {};
SymbolProfile.defaultProps = {};

export default SymbolProfile;
