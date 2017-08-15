import React from 'react';
import createReactClass from 'create-react-class';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { initStore } from './redux';
import { FullScreenLoading } from './components';
import { Container as Auth } from './modules/auth';
import { Container as Navigation } from './modules/navigation';


const App = createReactClass({

    getInitialState() {
        return {
            store: null
        };
    },

    componentDidMount() {
        StatusBar.setHidden(true);
        initStore().then((store) => this.setState({ store }));
    },

    render() {
        if (!this.state.store) {
            return <FullScreenLoading/>;
        }

        return (
            <Provider store={this.state.store}>
                {this.renderAuthOrNavigation()}
            </Provider>
        );
    },

    renderAuthOrNavigation() {
        if (!this.props.authenticated) {
            return <Auth/>;
        }

        return <Navigation/>;
    }
});


export default App;