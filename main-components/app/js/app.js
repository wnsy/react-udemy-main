import React from 'react';
import ReactDOM from 'react-dom';

import NameList from './components/NameList';



class App extends React.Component {
	
	
	render() {
		return (
			<div className="row">
				<NameList phrase="I'm on the bottom!" />
			</div>
		)
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('app')
);






