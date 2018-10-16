import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';

// es6
class App extends React.Component {

  render() {
    return (
      <div>
        <Layout />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
	document.getElementById('app')
);
