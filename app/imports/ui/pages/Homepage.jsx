import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../components/NavBar';

/** A simple static component to render some text for the landing page. */
class Homepage extends React.Component {
  render() {
    return (
        <div>
          <NavBar/>
        <Container fluid className="background-black">
          <h1 className="fontsize-big h1-white">WORK IN PROGRESS</h1>
        </Container>
        </div>
    );
  }
}

export default Homepage;
