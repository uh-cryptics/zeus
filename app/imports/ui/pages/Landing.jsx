import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Container fluid className="background-blue">
          <div className="padding-fix">
        <Container fluid textAlign='center' className="h1-white background-black">
            <h1>ZEUS</h1>
            <p>Inventory Management</p>
            <div>
              <Button compact content='Login' color='blue' as={NavLink} exact to="/signin"/>
              <Button compact content='Register' color='blue' as={NavLink} exact to="/signup"/>
            </div>
          </Container>
          </div>
        </Container>
    );
  }
}

export default Landing;
