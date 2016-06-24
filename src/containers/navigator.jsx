import React from 'react';

class Navigator extends React.Component {
    render () {
        return (
            <div className="app" id="container-navigator">
                <header id="app-header">
                    Header here
                </header>
                { this.props.children }
                <footer id="app-footer">
                    Footer Here
                </footer>
            </div>
        )
    }
}

export default Navigator;
