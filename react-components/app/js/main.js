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

	const changeHandler = ((event) => {
		console.log(event.target.value)
	})

	return (
		<div className="red-background">
			<Welcome firstName="Chloe" lastName="Hayward" />
			<ul>
				{nameMapper()}
			</ul>
			<input onChange={changeHandler} />
		</div>
	)
});

// ReactDOM.render(
//   <App />,
// 	document.getElementById('app')
// );










const MyApp = ((props) => {
	const element = (
		<div>
			<h1>Hello to the virtual DOM</h1>
			<h3>I've been rendered {props} times!</h3>
		</div>
	)
	ReactDOM.render(
		element,
		document.getElementById('app')
	)
});

var numTimes = 0
setInterval(() => {
	numTimes += 1
	MyApp(numTimes)
}, 1000)
