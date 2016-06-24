import React from 'react';
import { Link } from 'react-router';
import { routes } from '../constants';

class Navigator extends React.Component {
    render () {
        return (
            <div className="app" id="container-navigator">
                <header id="app-header">
                    Header here
                    <ul>
                        <li><Link to={routes.HOME}>Home</Link></li>
                        <li><Link to={routes.SECOND_PAGE}>Second Page</Link></li>
                    </ul>
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
