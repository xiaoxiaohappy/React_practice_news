/**
 * Created by xiaoxiao on 2017/6/30.
 */
import React from 'react';
import {
    Row,Col
} from 'antd';

import {Router,Route,Link,browserHistory} from 'react-router'

export default class MobileList extends React.Component{
    constructor(){
        super();
        this.state={
            news:''
        }

    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
    };


    render(){



        const {news} = this.state;

        const newsList = news.length
            ?news.map((newsItem,index)=>(
                <section key={index} class="m_article list-item special_section cleaxfix">
                    {/*引号中加变量要写$*/}
                    <Link to={`details/${newsItem.uniquekey}`}>
                        {/*这些样式类都是提前写好的*/}
                        <div class="m_article_img">
                           <img src={newsItem.thumbnail_pic_s} alt={newsItem.uniquekey}/>
                        </div>
                        <div class="m_article_info">
                            <div class="m_article_title">
                                <span>{newsItem.title}</span>
                            </div>
                        </div>
                        <div class="m_article_desc clearfix">
                            <div class="m_article_desc_l">
                                <span class="m_article_channel">{newsItem.realtype}</span>
                                <span class="m_article_time">{newsItem.date}</span>
                            </div>
                        </div>
                    </Link>
                </section>
            ))
            :'没有加载到新闻';


        return(
            <div>
                <Row>
                    <Col span={24}>
                        {newsList}
                    </Col>
                </Row>
            </div>
        )
    }
}