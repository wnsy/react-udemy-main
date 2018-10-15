import React from 'react';
import ReactDOM from 'react-dom';

const Welcome = ((props) => {
	return (
		<div>
			<h4>Welcome to test site, {props.firstName}</h4>
			<h4>Content: {props.lastName}</h4>
		</div>
	)
})

var App = React.createClass({
	nameMapper: function () {
		const nameArray = ["Joe", "Doe", "Jane", "Judy"]
		return nameArray.map((name,i) =>
			<li key={i}>{name}</li>
		)
	},

	render: function() {
		return (
			<div>
				<Welcome firstName="Chloe" lastName="Hayward" />
				<ul>
					{this.nameMapper}
				</ul>
			</div>
		)
	}
})

// const App = (() => {
// 	const nameArray = ["Joe", "Doe", "Jane", "Judy"]
// 	const nameMapper = (() =>
//
// 	);
//
// 	const changeHandler = ((event) => {
// 		console.log(event.target.value)
// 	})
//
// 	return (
// 	)
// });

ReactDOM.render(
  <App />,
	document.getElementById('app')
);
