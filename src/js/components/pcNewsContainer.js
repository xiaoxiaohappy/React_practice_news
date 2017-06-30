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




                     </div>
                 </Col>
                 <Col span={2}></Col>
             </Row>
         </div>
         );




    };
};