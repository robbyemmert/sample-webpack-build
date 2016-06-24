import React from 'react';
import { AdvancedComponent } from '../components';

class SecondPage extends React.Component {
    render () {
        return (
            <div id="container-second-page">
                <h1>Second Page</h1>
                <AdvancedComponent text="Advanced Component" someValue={4}>
                    <strong>Some more JSX in here.</strong>
                </AdvancedComponent>
            </div>
        );
    }
}

export default SecondPage;
