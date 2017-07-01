/**
 * Created by xiaoxiao on 2017/6/29.
 */

import React from 'react';
import MobileHeader from './MobileHeader';
import { Tabs,Carousel,BackTop } from 'antd';
const TabPane = Tabs.TabPane;
import MobileFooter from './mobileFooter'

import MobileList from './mobileList'

export default class MobileIndex extends React.Component{
    render(){
        const settings={
            dots:true,
            infinite:true, //should the gallery wrap around it's contents
            speed:500,
            sliderToShow:1,
            autoplay:true
        }
        return (
            <div>
                <MobileHeader>

                </MobileHeader>


                {/*<Tabs defaultActiveKey="2" size="small">*/}
                    {/*<TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>*/}
                    {/*<TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>*/}
                    {/*<TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>*/}
                {/*</Tabs>*/}
                {/*<div style={{height:"20px"}}></div>*/}
                <Tabs>
                    <TabPane tab="头条" key="1">
                        {/*轮循图*/}
                        <div class="carousel" style={{height:"300px",padding:"5px"}}>
                            <Carousel {...settings} style={{width:"95%",backgroundSize:"100% 100%"}}>
                                <div><img src="./src/images/carousel_1.jpg"/></div>
                                <div><img src="./src/images/carousel_2.jpg"/></div>
                                <div><img src="./src/images/carousel_3.jpg"/></div>
                                <div><img src="./src/images/carousel_4.jpg"/></div>
                            </Carousel>
                        </div>
                        <MobileList count={20} type="top"/>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileList count={20} type="shehui"/>
                    </TabPane>
                    <TabPane tab="娱乐" key="3">
                        <MobileList count={20} type="yule"/>
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileList count={20} type="guoji"/>
                    </TabPane>
                    <TabPane tab="国内" key="5">
                        <MobileList count={20} type="guonei"/>
                    </TabPane>
                </Tabs>


                <MobileFooter></MobileFooter>


                <BackTop/>
            </div>
        );
    };
}


