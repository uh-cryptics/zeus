import React from 'react';
import { Button, Modal, Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class EditSupplies extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    setOpen(value) {
        this.setState({ open: value });
    }

    submit() {
        console.log('Edit Successfully');
        this.setOpen(false);
    }

    render() {
        return (
            <Modal
                onClose={() => this.setOpen(false)}
                onOpen={() => this.setOpen(true)}
                open={this.state.open}
                trigger={<Button floated="left">Edit Supplies</Button>}>
                <Modal.Header>Edit a Supply</Modal.Header>
                <Modal.Content>
                    <Form>
                      <Form.Field required>
                        <label>Name</label>
                          <Form.Group widths="equal">
                            <Form.Field>
                              <Input placeholder="Enter supply name" name="supply-name"/>
                            </Form.Field>
                          </Form.Group>
                      </Form.Field>
                      <Form.Field>
                          <Form.Group widths="equal">
                            <Form.Field required>
                              <label>Amount</label>
                              <Input type="number" placeholder="Enter amount" name="amount" />
                            </Form.Field>
                            <Form.Field required>
                              <label>Location</label>
                              <Input placeholder="Enter location" name="location"/>
                            </Form.Field>
                          </Form.Group>
                      </Form.Field>
                      <Form.Field>
                        <Form.Group widths="equal">
                          <Form.Field required>
                            <label>Reserves Location</label>
                            <Input placeholder="Enter reserves location" name="reserves-location"/>
                          </Form.Field>
                          <Form.Field required>
                            <label>Reserves Amount</label>
                            <Input type="number" placeholder="Enter reserves amount" name="reserves-amount"/>
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

export default EditSupplies;
