import React from 'react';

class HomePage extends React.Component {
    render () {
        return (
            <div id="container-home-page">
                <h1>Home</h1>
                <p>Hello World! Here's a widget:</p>
                <DefaultComponent />
            </div>
        );
    }
}

export default HomePage;