/**
 * Created by xiaoxiao on 2017/6/30.
 */
import React from 'react';
import {
    Card
} from 'antd';

import {Router,Route,Link,browserHistory} from 'react-router'

export default class PCImagesBlock extends React.Component{
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
        const styleImage = {
            display:"block",
            width:this.props.imageWidth,
            height:"90px"
        }
        const styleH3 = {
            width:this.props.imageWidth,
            whiteSpace:"nowrap",
            overflow:"hidden",
            textOverflow:"ellipsis"
        }

        const newsList = news.length
            ?news.map((newsItem,index)=>(
                //需要循环出来的每个图片的div不一样 所以要赋值key，是取的循环的时候的index
                <div key={index} class="imageblock">

                    {/*uniquekey是数据中的属性*/}
                    <Link to={'details/${newsItem.uniquekey}'} target="_blank">
                       <div class="custom-image">
                           {/*thumbnail_pic_s是数据中的属性*/}
                           <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s} />
                       </div>
                        <div class="custom-card">
                            <h3 style={styleH3}>{newsItem.title}</h3>
                            <p>{newsItem.author_name}</p>
                        </div>
                    </Link>
                </div>
            ))
            :'没有加载到新闻';


        return(
            <div class="topNewsList">
                <Card title={this.props.cardTitle} bordered={true} style={{width:this.props.width}}>
                        {newsList}
                </Card>
            </div>
        )
    }
}