import React, { Component } from 'react'
import './App.sass'
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    )
  }
}

export default App