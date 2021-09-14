import React from 'react';
import { Button, Modal, Form, Input, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class DeleteSupplies extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  setOpen(value) {
    this.setState({ open: value });
  }

  submit() {
    this.setOpen(false);
  }

  render() {
    return (
        <Modal
            onClose={() => this.setOpen(false)}
            onOpen={() => this.setOpen(true)}
            open={this.state.open}
            trigger={<Button floated="right">Delete Supplies</Button>}>
          <Modal.Header>Delete a Medication</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required>
                <label>Supply Name</label>
                <Form.Group widths="equal">
                  <Form.Field>
                    <Select placeholder="Supply Name" options={this.props.supply}/>
                  </Form.Field>
                </Form.Group>
              </Form.Field>
              <Form.Field>
                <Form.Group widths="equal">
                  <Form.Field required>
                    <label>Location</label>
                    <Input placeholder="Enter storage location"/>
                  </Form.Field>
                </Form.Group>
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button secondary onClick={() => this.setOpen(false)}>Cancel</Button>
            <Button primary onClick={() => this.submit()}>Delete</Button>
          </Modal.Actions>
        </Modal>
    );
  }
}

DeleteSupplies.propTypes = {
  supply: PropTypes.array.isRequired,
};

export default DeleteSupplies;
