import React from 'react';
import ReactDOM from 'react-dom';
import NameList from './components/NameList';

// es6
class App extends React.Component {

  render() {
    return (
      <NameList />
    )
  }
}

ReactDOM.render(
  <App />,
	document.getElementById('app')
);
