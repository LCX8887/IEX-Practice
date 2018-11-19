import {SectorHighLights,SectorPerformance,MostActive,IPO,SpecialList,News,MyWatchList } from '../../../components/index';

import React, { Component } from 'react';
import { Layout,Row,Col } from 'antd';

const { Header, Footer, Content,Sider } = Layout;    


class MarketView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };  
    
    }
    render() {
        
        return (
            <Layout>
                <Content className='MarketViewContent'>
                    <MostActive />
                    <Layout>
                        <Content>
                            <SectorHighLights />
                            <IPO />
                        </Content>
                        <Sider className='MyWatchList'>
                            <MyWatchList />
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
