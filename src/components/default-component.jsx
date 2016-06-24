import React from 'react';

/*
DO NOT DELETE THIS COMPONENT!
Although it may seem useless to experienced developers, it's a great boilerplate for creating new components, and can serve as a reference.  As long as it is unused, Webpack will automatically ignore it in the build process, so don't worry about it cluttering things up.
 */
class DefaultComponent extends React.Component {

    render () {
        return (
            <div {...this.props} className={['component-default-component', this.props.className].join(' ')}>
                Your Widget Here
            </div>
        )
    }
}

export default DefaultComponent;
