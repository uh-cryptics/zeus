import React from 'react';
import { Button, Modal, Form, Input, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Administer extends React.Component {

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
                trigger={<Button floated="right">Administer</Button>}>
                <Modal.Header>Administer Medication</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field required>
                            <label>Patient Name</label>
                            <Form.Group widths="equal">
                                <Form.Field>
                                    <Input placeholder="First Name" name="first-name"/>
                                </Form.Field>
                                <Form.Field>
                                    <Input placeholder="Last Name" name="last-name" />
                                </Form.Field>
                            </Form.Group>
                        </Form.Field>
                        <Form.Field>
                            <Form.Group widths="equal">
                                <Form.Field required>
                                  <label>Medicine</label>
                                  <Select placeholder="Select a medicine to administer..."
                                          options={this.props.medication} />
                                </Form.Field>
                                <Form.Field required>
                                    <label>Amount</label>
                                    <Input type="number" name="amount" placeholder="Amount"/>
                                </Form.Field>
                            </Form.Group>
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button secondary onClick={() => this.setOpen(false)}>Cancel</Button>
                    <Button primary onClick={() => this.submit()}>Administer</Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

Administer.propTypes = {
    medication: PropTypes.array.isRequired,
};

export default Administer;
