import React, { Component } from 'react';
import { SymbolHeader,SymbolChart,SymbolProfile } from '../../../components/index';
import { Layout,Row,Col } from 'antd';

const { Header, Footer, Content,Sider } = Layout;    


class SymbolDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };  
    
    }
   
    render() {      
        return (
            <Layout>
                <Content className='SymbolDetailsContent'>
                    <SymbolHeader />
                    <SymbolChart />
                    <SymbolProfile />
                    {/* <SymbolNews />
                    <SymbolPeers />
                    <SymbolFinancils /> */}
                </Content>
            </Layout>
        );
    }
}


export default SymbolDetails;
