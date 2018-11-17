import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import SectorSummary from '../../SectorSummary';
import { Layout,Row,Col } from 'antd';

const { Header,Content } = Layout;




class SectorHighLights extends Component {
    constructor(props) {
        super(props);
        this.state = {
           backgroundPreFix: 'https://iextrading.com/images/stocks/',
           backgroundSufFix: '.jpg',

        };  
       
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }
    
    render() {
        
       const { sectors,lastUpdated } = this.props;
       const { backgroundPreFix,backgroundSufFix } = this.state;      
        var day = new Date(lastUpdated).toDateString();
        var time= new Date(lastUpdated).toTimeString().slice(0,8);
        var updatedTime = day+','+time;
       var highestPerformance={};
       var lowestPerformance={};
       var sectorHighLights = [];
       for(var i=0;i<sectors.length;i++){
            var name = sectors[i].name.replace(' ','%20');
            var background = backgroundPreFix+name+backgroundSufFix;
           if(i===0){
            highestPerformance = Object.assign({},sectors[i]);
            highestPerformance.background = background;
            lowestPerformance = Object.assign({},sectors[i]);
            lowestPerformance.background = background;
           }
           if(sectors[i].performance > highestPerformance.performance){
               highestPerformance = Object.assign({},sectors[i]);                         
               highestPerformance.background = background;
           }
           if(sectors[i].performance < lowestPerformance.performance) {
               lowestPerformance = Object.assign({},sectors[i]);     
               lowestPerformance.background = background;
           }
           
        }
       
       sectorHighLights.push(highestPerformance);
       sectorHighLights.push(lowestPerformance);
        return (
            <Layout>
                <Header className='SectorHighLightsHeader'>
                    <h2>Sector HighLights</h2>
                    <p>{updatedTime}</p>
                </Header>
                <Content className='MostActiveContent'>
                    <Row className='SectorHighLights' type='flex' justify='start' gutter={24}>
                        {sectorHighLights.map((sector,index) => <Col span={10}><SectorSummary
                                                                                    key={index} 
                                                                                    name = {sector.name}
                                                                                    performance = {sector.performance}
                                                                                    background = {sector.background} />
                                                                </Col>)}
                    </Row>
                </Content>
            </Layout>
        );
    }
}


const mapStateToProps = state => ({
    sectors:state.SectorPerformanceReducer.sectors,
    lastUpdated:state.SectorPerformanceReducer.lastUpdated,
});


SectorHighLights.propTypes = {

}
SectorHighLights.defaultProps = {

}

export default connect(mapStateToProps)(SectorHighLights);
