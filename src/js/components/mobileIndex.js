/**
 * Created by xiaoxiao on 2017/6/29.
 */

import React from 'react';
import MobileHeader from './MobileHeader';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import MobileFooter from './mobileFooter'



export default class MobileIndex extends React.Component{
    render(){
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
                <Tabs style={{height:"50px"}}>
                    <TabPane tab="头条" key="1"></TabPane>
                    <TabPane tab="社会" key="2"></TabPane>
                    <TabPane tab="娱乐" key="3"></TabPane>
                    <TabPane tab="国际" key="4"></TabPane>
                    <TabPane tab="国内" key="5"></TabPane>
                </Tabs>


                <MobileFooter></MobileFooter>
            </div>
        );
    };
}


