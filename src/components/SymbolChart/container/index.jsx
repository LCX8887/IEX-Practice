import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchChart } from '../flow/actions';
import { Radio } from 'antd';
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
        this.state = {
            range:['1D','1M','3M','6M','YTD','1Y','2Y','5Y'],
            selectedRange:'1D',
        };  
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.getDataFilter = this.getDataFilter.bind(this);
    }
    componentDidMount() {
        this.props.fetchChart(this.props.selectedSymbol,this.state.selectedRange);
    }
    handleBtnClick = (e) => {
        e.preventDefault();
        this.setState({
            selectedRange:e.target.value,
        })
        this.props.fetchChart(this.props.selectedSymbol,e.target.value);
    }
    getDataFilter = (str) => {
        let dataFilter = {
            type: 'pick',       
            key: "symbol",          
            value: "average" 
        }
        if(str === '1D'){
            dataFilter.fields = ['label','average'];
        }else{
            dataFilter.fields = ['date','close'];
        }
        return dataFilter;
    }
    render() {
        const ds = new DataSet();       
        const dataFilter = this.getDataFilter(this.state.selectedRange);
        const dv = ds.createView()
            .source(this.props.chartData)
            .transform(dataFilter);        
        const cols = {
                average: {range: [0, 1]}
        };
        return (            
            <div className='SymbolChart'>
                <Chart height={300} data={dv}  forceFit={true}>
                    <Tooltip
                        crosshairs={{
                        type: "y"
                        }}
                    />
                    <View scale={cols} data={dv}>                        
                        <Geom
                            type="line"
                            position={dataFilter.fields[0]+'*'+dataFilter.fields[1]}
                            size={2}
                            color='#af3232'
                        />
                    </View>
                    {/* <View data={dv}>
                        <Geom
                            type="interval"
                            position={dataFilter.fields[0]+'*'+dataFilter.fields[1]}
                           
                        />
                    </View> */}
                </Chart>
                <Radio.Group defaultValue='1D'>
                    {this.state.range.map(r => <Radio.Button  value={r} onClick={this.handleBtnClick}>{r}</Radio.Button>)}
                </Radio.Group>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    selectedSymbol:state.global.selectedSymbol,
    chartData:state.SymbolChartReducer.chartData,
    
});

const mapDispatchToProps = {
    fetchChart,
};


SymbolChart.propTypes = {

}
SymbolChart.defaultProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SymbolChart);
