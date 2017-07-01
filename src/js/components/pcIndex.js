/**
 * Created by xiaoxiao on 2017/6/29.
 */
import React from 'react';
import PCHeader from './pcHeader';
import PCFooter from './pcFooter'

import PCNewsContainer from './pcNewsContainer'

export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
                <PCHeader></PCHeader>

                <PCNewsContainer></PCNewsContainer>

                <PCFooter></PCFooter>
            </div>
        );
    };
}



