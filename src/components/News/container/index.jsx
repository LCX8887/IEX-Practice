import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchPosts } from '../flow/actions';
import NewsTable from '../components/NewsTable';
import { Card } from 'antd';
const Meta = Card.Meta;


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
    //    if(news.length>0){
    //         var keys = Object.keys(news[0]);
    //         var newsDetails = getDetails(news,keys);
    //    }else{
    //        var newsDetails = [];
    //    }
      

        return (
            <div>
                <div className='NewsHeader'>
                    <h3>News</h3>
                </div>
                {news.map(item => <Card
                                    cover={<img src={item.image} />}>
                                    <Meta
                                        title={item.headline}
                                        description={item.summary}
                                    />
                                    </Card>)}
               
            </div>
        );
    }
}
// function getDetails(arr,keys){
//     var result=[];
//     for(var i=0;i<arr.length;i++){
//         var item = [];
//         for(var j=0;j<keys.length;j++){
//             item.push(arr[i][keys[j]])
//         }
//         result.push(item);
//     }
//     return result;
// }

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
