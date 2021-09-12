import React from 'react';
import ListInventory from '../components/ListInventory';

/** A simple static component to render some text for the landing page. */
class Inventory extends React.Component {
  render() {
    return (
        <div>
          <ListInventory/>
        </div>
    );
  }
}

export default Inventory;
