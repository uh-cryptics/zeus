import React from 'react';
import { Button, Modal, Form, Input, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class AddInventory extends React.Component {

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
                trigger={<Button floated="right">Add Inventory</Button>}>
                <Modal.Header>Add Medication</Modal.Header>
                <Modal.Content>
                    <Form>
                      <Form.Field required>
                        <label>Medication Name</label>
                          <Form.Group widths="equal">
                            <Form.Field>
                              <Input placeholder="Enter medication name" name="med-name"/>
                            </Form.Field>
                          </Form.Group>
                      </Form.Field>
                      <Form.Field>
                          <Form.Group widths="equal">
                            <Form.Field required>
                              <label>Medication Type</label>
                              <Select placeholder="Select medication type" name="med-type"
                                      options={this.props.medType}/>
                            </Form.Field>
                            <Form.Field required>
                              <label>Amount</label>
                              <Input type="number" placeholder="Enter amount" name="amount" />
                            </Form.Field>
                          </Form.Group>
                      </Form.Field>
                      <Form.Field>
                        <Form.Group widths="equal">
                          <Form.Field required>
                            <label>Expiration Date</label>
                            <Input placeholder="Enter expiration date" name="exp-date"/>
                          </Form.Field>
                          <Form.Field required>
                            <label>Storage Location</label>
                            <Input placeholder="Enter storage location" name="location"/>
                          </Form.Field>
                        </Form.Group>
                      </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button secondary onClick={() => this.setOpen(false)}>Cancel</Button>
                    <Button primary onClick={() => this.submit()}>Add</Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

AddInventory.propTypes = {
    medType: PropTypes.array.isRequired,
};

export default AddInventory;
