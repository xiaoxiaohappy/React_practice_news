/**
 * Created by xiaoxiao on 2017/6/29.
 */
import React from 'react';
import {Row, Col} from 'antd';

export default class MobileFooter extends React.Component {

    render() {
        return (


            <footer>
                <Row>

                    {/*一行有24格*/}

                    {/*占两格左留白*/}
                    <Col span={2}></Col>


                    <Col span={20} class="footer">
                        &copy;&nbsp;2016 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    };
}
