import React from 'react';

import helloMessage from '../lib/hello.txt';
import Header from '../components/Header';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <p>{helloMessage}</p>
      </div>
    );
  }
}
