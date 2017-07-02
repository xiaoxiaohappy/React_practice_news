/**
 * Created by xiaoxiao on 2017/7/1.
 */
import React from 'react';
import { Row,Col ,BackTop} from 'antd';

import PCHeader from './pcHeader';
import PCFooter from './pcFooter'

import PCImagesBlock from './pcNewsImageBlock'

import CommonComments from './commonComments'
export default class PCNewsDetails extends React.Component{
    constructor(){
        super();
        this.state={
            newsItem:''
        }
    }
    componentDidMount(){
    //    fetch加载数据
        var myFetchOption={
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey,myFetchOption)
            .then(response=>response.json())
            .then(json=>{
                this.setState({newsItem:json});
                document.title=this.state.newsItem.title+"-React News | React 驱动的新闻平台";
            });
    }
    createMarkup(){
        //pagecontent是数据中的相应属性的html格式的，在react中直接引入即可
        return {__html: this.state.newsItem.pagecontent};
    }


    render(){


        return(
            <div>
                <PCHeader></PCHeader>

                <Row>
                    <Col span={2}></Col>

                    <Col span={14} class="container">
                        {/*dangerouslySetInnerHTML引入html*/}
                        <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>



                        {/*天际评论*/}
                        <CommonComments uniquekey={this.props.params.uniquekey}/>
                    </Col>



                    <Col span={6}>
                        <PCImagesBlock count={30} type="top" width="100%" cardTitle="相关新闻" imageWidth="140px"/>
                    </Col>

                    <Col span={2}></Col>

                </Row>

                <PCFooter></PCFooter>



                <BackTop/>

            </div>
        )
    }
}