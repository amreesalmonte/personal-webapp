import React, { Component } from 'react';
import Links from "./components/Links"

class App extends Component {
  render() {
    return (
      <div>
        <Links link="https://github.com" title="github" />
      </div>
    );
  }
}

export default App;
