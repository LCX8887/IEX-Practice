import {SearchBar,SectorHighLights,SectorPerformance,MostActive,IPO,SpecialList,News } from '../../../components/index';

import React, { Component } from 'react';
import { Layout,Row,Col } from 'antd';




class MarketView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };  
    
    }
    render() {
        const { Header, Footer, Content,Sider } = Layout;    
        return (
            <Layout>
                <Header id='MarketViewLayoutHeader'>
                    <SearchBar />
                </Header>
                <Content id='MarketViewLayoutContent'>
                    <MostActive />
                    <Layout>
                        <Content>
                            <SectorHighLights />
                            <IPO />
                        </Content>
                        <Sider>
                        </Sider>
                    </Layout>
                    <SectorPerformance />
                    <SpecialList />
                    <News />
                </Content>
            </Layout>
           
        );
    }
}


export default MarketView;
