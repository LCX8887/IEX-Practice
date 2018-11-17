import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import { List } from 'antd';
const Meta = List.Meta;


class News extends Component {
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
       const { news } = this.props;
       if(news.length !== undefined){
           for(var i=0;i<news.length;i++){
                news[i].dateTime = news[i].datetime.slice(0,10)+' '+news[i].datetime.slice(11,16);
           }
       }
        return (
            <div className='News'>
            <h2>News</h2>
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={news}
                    renderItem={item => (
                    <List.Item key={item.headline} split={true}>
                        <List.Item.Meta                         
                            description={item.dateTime}/>
                        <List.Item.Meta                         
                            description={<p>source:{item.source}</p>}/>
                        <List.Item.Meta
                            title={<a href={item.url} target='_blank'>{item.headline}</a>}
                            description={item.summary}
                        />                   
                    </List.Item>
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    news:state.NewsReducer.news,
});


News.propTypes = {

}
News.defaultProps = {
   news:[],
}

export default connect(
  mapStateToProps,
)(News);
