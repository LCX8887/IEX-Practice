import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import SectorSummary from '../../SectorSummary';
import { Layout,Row,Col } from 'antd';

const { Header,Content } = Layout;

class SectorPerformance extends Component {
    constructor(props) {
        super(props);
        this.state = {
           backgroundPreFix: 'https://iextrading.com/images/stocks/',
           backgroundSufFix: '.jpg',

        };  
       
    }

    render() {
        
       const { sectors,lastUpdated } = this.props;
       const { backgroundPreFix,backgroundSufFix } = this.state;
       var sectorsWithBackground = [];
       var day = new Date(lastUpdated).toDateString();
       var time= new Date(lastUpdated).toTimeString().slice(0,8);
       var updatedTime = day+','+time;
      
       for(var i=0;i<sectors.length;i++){
           sectorsWithBackground[i] = Object.assign({},sectors[i]);
           var name = sectors[i].name.replace(' ','%20');           
           sectorsWithBackground[i].background = backgroundPreFix+name+backgroundSufFix;
       }
       
        return (
           
            <Layout>
                <Header className='SectorPerformanceHeader'>
                    <h2>Sector Performance</h2>
                    <p>{updatedTime}</p>
                </Header>
                <Content className='SectorPerformanceContent'>
                    <Row type='flex' justify='start' gutter={16}>
                        {sectorsWithBackground.map((sector,index) => <Col key={index} span={index>7?8:6}><SectorSummary
                                                                                    
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


SectorPerformance.propTypes = {

}
SectorPerformance.defaultProps = {
    
}

export default connect(
  mapStateToProps,
)(SectorPerformance);
