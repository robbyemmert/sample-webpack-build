import React from 'react';

class DefaultComponent extends React.Component {

    render () {
        return (
            <div {...this.props} className={['component-default-component', this.props.className].join(' ')}>
                Your Widget Here
            </div>
        )
    }
}

export default Widget;
