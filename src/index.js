import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import mainReducer from './mainReducer';

import Container from './container';

class App extends Component {
    render() {
        return (
            <Container/>
        );

    }
}

render(<Provider store={createStore(mainReducer)}>
    <App/>
</Provider>, document.getElementById('app'));