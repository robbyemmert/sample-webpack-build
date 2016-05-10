import React from 'react';

console.log('person loading...');
export default class Person extends React.Component {
	render() {
		return (
			<div class="person">
				Hello {this.props.name}!
			</div>
		)
	}
}
