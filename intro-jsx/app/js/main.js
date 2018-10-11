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

const App = (() => {
	const nameArray = ["Joe", "Doe", "Jane", "Judy"]
	const nameMapper = (() =>
		nameArray.map((name,i) =>
			<li key={i}>{name}</li>
		)
	);
	return (
		<div>
			<Welcome firstName="Chloe" lastName="Hayward" />
			<ul>
				{nameMapper()}
			</ul>
		</div>
	)
});

ReactDOM.render(
  <App />,
	document.getElementById('app')
);
