import React from 'react';
import { Segment } from 'semantic-ui-react';
import NavBar from '../components/NavBar';
import MedicationTab from '../components/MedicationTab';

/** A simple static component to render some text for the landing page. */
class Homepage extends React.Component {
  render() {
    return (
        <div>
          <NavBar/>
        <Segment color="black" inverted basic>
          <MedicationTab></MedicationTab>
        </Segment>
        </div>
    );
  }
}

export default Homepage;
