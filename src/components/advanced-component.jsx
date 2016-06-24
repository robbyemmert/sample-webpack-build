import React from 'react';

/*
DO NOT DELETE THIS COMPONENT!
Although it may seem useless to experienced developers, it's a great boilerplate for creating new components, and can serve as a reference.  As long as it is unused, Webpack will automatically ignore it in the build process, so don't worry about it cluttering things up.
 */
class AdvancedComponent extends React.Component {
    //You can add convenience methods that return values, or JSX to inject into your template below, in the render function.
    getAValue(value){
        return value + 5;
    }

    getSomeJSX() {
        return (
            <h2>Hi</h2>
        );
    }

    render () {
        var someVar = 'Hi there';
        var jsxVar = (
            <div>Some JSX</div>
        );

        return (
            <div {...this.props} className={['component-default-component', this.props.className].join(' ')}>
                {/* inject any javascript variable with { variableName }.  this.props contains variables from this component's tag attributes, i.e. <MyTag someProp="myvalue" /> */}
                <h1>{this.props.text}</h1>
                <p>{ someVar }</p>
                { jsxVar }

                {/* You inject values from convenience methods the same way you inject variables.  Just call the method with this.methodName() */}
                <p>Some number: { this.getAValue(this.props.someValue) }</p>
                { this.getSomeJSX() }

                {/* this.props.children is anything that is inside of this component's tag, i.e. <MyTag>...the children are here</MyTag> */}
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default AdvancedComponent;
