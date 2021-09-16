import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Message, Button } from 'semantic-ui-react';

class LowInventory extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: false }
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        const currState = this.state.show;
        this.setState({ show: !currState });
    }

    render() {
        return (
            <Message negative>
                <Message.Content>
                    <Message.Header>These items currently have a low inventory:</Message.Header>
                    <Message.List style={{ display: "table", margin: "0 auto" }}>
                        { this.props.items.slice(0,5).map((item, index) => <Message.Item key={index}>{ item.name }</Message.Item>) }
                        
                        { this.state.show ? 
                            this.props.items.slice(5,this.props.items.length).map((item, index) => 
                            <Message.Item key={index}>{ item.name }</Message.Item>) 
                        : 
                            <></>
                        }
                        { this.props.items.length > 5 ? <Button onClick={() => this.toggleShow()}>{ this.state.show ? "Hide" : "Show More" }</Button> : <></>}
                    </Message.List>
                </Message.Content>
            </Message>
        );
    }

}

LowInventory.propTypes = {
    items: PropTypes.array,
};

export default LowInventory;