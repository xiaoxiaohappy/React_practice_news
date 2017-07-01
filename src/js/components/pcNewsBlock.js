/**
 * Created by xiaoxiao on 2017/6/30.
 */
import React from 'react';
import {
    Card
} from 'antd';

import {Router,Route,Link,browserHistory} from 'react-router'

export default class PCNewsBlock extends React.Component{
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
            <li key={index}>

                {/*uniquekey是新闻的数据中的属性,引号中加变量要 先写$*/}

                <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                    {newsItem.title}
                </Link>
            </li>
        ))
        :'没有加载到新闻';


        return(
            <div class="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}