import React from 'react';

import helloMessage from '../lib/hello.txt';
import Header from '../components/Header';
import '../assets/index.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Index</h1>
        <p>{helloMessage}</p>
      </div>
    );
  }
}
