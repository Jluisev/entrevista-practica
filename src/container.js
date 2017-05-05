import React, {Component} from 'react';
import * as Actions from './actions';
import {connect} from 'react-redux';


class Container extends Component {

    handleButtonClick() {
        this.props.incrementCounter();
    }

    render() {
        return (
            <div>
                <div id="counter-result">{this.props.counter}</div>
                <button onClick={this.handleButtonClick.bind(this)}>Incrementar Contador</button>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {counter: state.counter}
}

export default connect(mapStateToProps, Actions)(Container);