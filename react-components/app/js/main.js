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

// es6
class App extends React.Component {
  nameMapper(nameArray) {
		return nameArray.map((name,i) =>
			<li key={i}>{name}</li>
		)
	}

	render() {
	const nameArray = ["Joe", "Doe", "Jane", "Judy"];
		return (
			<div>
				<Welcome firstName="Chloe" lastName="Hayward" />
				<ul>
					{this.nameMapper(nameArray)}
				</ul>
				<Welcome firstName="Jane" lastName="Doe" />
			</div>
		)
	}
}

ReactDOM.render(
  <App />,
	document.getElementById('app')
);
