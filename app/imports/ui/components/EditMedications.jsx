import React from 'react';
import { Button, Modal, Form, Input, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class EditMedications extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  setOpen(value) {
    this.setState({ open: value });
  }

  submit() {
    console.log('Edited Successfully');
    this.setOpen(false);
  }

  render() {
    return (
        <Modal
            onClose={() => this.setOpen(false)}
            onOpen={() => this.setOpen(true)}
            open={this.state.open}
            trigger={<Button floated="left">Edit Medication</Button>}>
          <Modal.Header>Edit a Medication</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field required>
                <label>Medication Name</label>
                <Form.Group widths="equal">
                  <Form.Field>
                    <Select placeholder="Medication Name" options={this.props.medication}/>
                  </Form.Field>
                </Form.Group>
              </Form.Field>
              <Form.Field>
                <Form.Group widths="equal">
                  <Form.Field required>
                    <label>Medication Type</label>
                    <Select placeholder="Medication Type" options={this.props.medType}/>
                  </Form.Field>
                  <Form.Field required>
                    <label>Amount</label>
                    <Input type="number" placeholder="Enter an amount"/>
                  </Form.Field>
                </Form.Group>
              </Form.Field>
              <Form.Field>
                <Form.Group widths="equal">
                  <Form.Field required>
                    <label>Expiration Date</label>
                    <Input placeholder="Enter expiration date"/>
                  </Form.Field>
                  <Form.Field required>
                    <label>Location</label>
                    <Input placeholder="Enter storage location"/>
                  </Form.Field>
                </Form.Group>
              </Form.Field>
              <Form.Field>
                <Form.Group widths="equal">
                  <Form.Field required>
                    <label>Supply</label>
                    <Input type="number" placeholder="Enter supply amount"/>
                  </Form.Field>
                  <Form.Field required>
                    <label>Reserves Supply</label>
                    <Input placeholder="Enter reserves supply amount"/>
                  </Form.Field>
                  <Form.Field required>
                    <label>Reserves Expiration</label>
                    <Input placeholder="Enter reserves expiration date"/>
                  </Form.Field>
                </Form.Group>
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button secondary onClick={() => this.setOpen(false)}>Cancel</Button>
            <Button primary onClick={() => this.submit()}>Edit</Button>
          </Modal.Actions>
        </Modal>
    );
  }
}

EditMedications.propTypes = {
  medication: PropTypes.array.isRequired,
  medType: PropTypes.array.isRequired,
};

export default EditMedications;