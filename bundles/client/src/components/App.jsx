import React from 'react';
import data from '../../../db/zuumers_data';
import Bundles from './Bundles.jsx';
const axios = require('axios')

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
      // [{id, groupId, name, price}, {}...]
    }
  }

  componentDidMount() {
    console.log('componentDidMount is working');
    console.log(data)
  }
  render() {
    return (
      <center>
        <div style={{ paddingTop: '60' }}></div>
        <h2>Recommended Accessories</h2>
        <div style={{ paddingTop: '60' }}></div>
        <div>
          <Bundles data={this.state.data} />
        </div>
        <div style={{ paddingTop: '60' }}></div>
        <p>See all Mantis electric scooter accessories and parts.</p>
      </center>
    )
  }
}

export default App;