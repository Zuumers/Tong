import React from 'react';
import Item from './Item.jsx';
const axios = require('axios')

class Bundles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span
          style={{
            display: "flex",
            justifyContent: "center"
          }}>

          {
            this.props.data.slice(0, 4).map(item => (
              <Item item={item} key={item.id} />
            ))
          }

        </span>
      </div >
    )
  }
}

export default Bundles;