import React from 'react';
const axios = require('axios')

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <center>
        <div>
          <div style={{
            textAlign: "left", width: '200',
            padding: '10'
          }}>
            <img src='https://zuumers-img.s3.us-east-2.amazonaws.com/Screen+Shot+2020-11-02+at+8.17.17+PM.png' height="200" width="200"></img>
            <h2>{this.props.item.name}</h2>
            <span style={{ textDecoration: "line-through", color: "grey", paddingRight: '15' }}>
              ${this.props.item.msrp}</span>
            <span>${this.props.item.price} Sale</span>
          </div>
        </div>
      </center>
    )
  }
}

export default Item;