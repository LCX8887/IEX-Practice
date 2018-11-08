import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import SymbolSummary from '../components/SymbolSummary';
import { Layout,Row,Col } from 'antd';




class MostActive extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };  
           
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPosts());
    }
    
    render() {
        const { mostActive } = this.props;
        const { Header,Content } = Layout;

        return (
            <Layout>
                <Header id='MostActiveHeader'>
                    <p>MARKET VIEW</p>
                    <h2>Today in the market</h2>
                </Header>
                <Content id='MostActiveContent'>
                    <Row type='flex' justify='space-around'>
                        {mostActive.map((item,index) => <Col xs={{ span: 5}} lg={{ span: 2}}><SymbolSummary 
                                                            key={index}
                                                            symbol={item.symbol}
                                                            name={item.companyName}
                                                            price={item.latestPrice}
                                                            change={item.changePercent}/></Col>
                        )}
                    </Row>
                </Content>
            </Layout>
        );
    }
}


const mapStateToProps = state => ({
    mostActive:state.MostActiveReducer.mostActive,
});


MostActive.propTypes = {

}
MostActive.defaultProps = {
   
}

export default connect(
  mapStateToProps,
)(MostActive);
