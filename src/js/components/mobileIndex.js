/**
 * Created by xiaoxiao on 2017/6/29.
 */

import React from 'react';
import MobileHeader from './MobileHeader';
import {Row,Col} from 'antd'
import MobileFooter from './mobileFooter'

export default class MobileIndex extends React.Component{
    render(){
        return (
            <div>
                <MobileHeader>

                </MobileHeader>


                <MobileFooter></MobileFooter>
            </div>
        );
    };
}


