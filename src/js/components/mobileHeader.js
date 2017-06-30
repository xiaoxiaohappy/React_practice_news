/**
 * Created by xiaoxiao on 2017/6/29.
 */

import React from 'react';

import {Row,Col} from 'antd'

export default class MobileHeader extends React.Component{
    render(){
        
        return (
            <div id="mobileheader">
                <header>
                    <img src="./src/images/logo.png" alt="logo" />
                    <span>ReactNews</span>
                </header>
            </div>
        );
    };
}


