/**
 * Created by xiaoxiao on 2017/6/30.
 */
import React from 'react';
import {
    Row,Col,
    Menu, Icon,
    Tabs,
    Carousel
} from 'antd';
const TabPane = Tabs.TabPane;

import PCNewsBlock from './pcNewsBlock'
import PCImagesBlock from './pcNewsImageBlock'

export  default class PCNewsContainer extends React.Component{


    render(){


        const settings={
            dots:true,
            infinite:true, //should the gallery wrap around it's contents
            speed:500,
            sliderToShow:1,
            autoplay:true
        }

     return(
         <div>
             <Row>
                 <Col span={2}></Col>
                 <Col span={20} class="container">


                     <div class="leftContainer">

                         {/*轮循图*/}
                         <div class="carousel" style={{height:"300px",padding:"5px"}}>
                             <Carousel {...settings}>
                                 <div><img src="./src/images/carousel_1.jpg"/></div>
                                 <div><img src="./src/images/carousel_2.jpg"/></div>
                                 <div><img src="./src/images/carousel_3.jpg"/></div>
                                 <div><img src="./src/images/carousel_4.jpg"/></div>
                             </Carousel>
                         </div>


                         <PCImagesBlock count={6} type="yule" width="400px" cardTitle="娱乐头条" imageWidth="112px"/>

                     </div>



                     <Tabs class="tabs_news">
                         <TabPane tab="头条" key="1">
                            <PCNewsBlock count={22} type="top" width="100%" border="false"/>
                         </TabPane>
                         <TabPane tab="国际" key="2">
                             <PCNewsBlock count={22} type="guoji" width="100%" border="false"/>
                         </TabPane>
                     </Tabs>




                 </Col>
                 <Col span={2}></Col>
             </Row>
         </div>
         );




    };
};