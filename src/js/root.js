import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Button} from 'antd';
import PCIndex from './components/pcIndex';
import MobileIndex from './components/mobileIndex';
import '../css/pc.css'
import '../css/mobile.css'

import 'antd/dist/antd.css';

import MediaQuery from 'react-responsive';

import PCNewsDetails from './components/pcNewsDetails'



export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <Router history={hashHistory}>
                        {/*默认加载PCIndex*/}
                        <Route path="/" component={PCIndex}> </Route>

                        <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>

                    </Router>



                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    };
}
ReactDOM.render(
    <Root/>, document.getElementById('mainContainer'));
