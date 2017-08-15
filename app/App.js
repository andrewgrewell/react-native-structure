import React from 'react';
import createReactClass from 'create-react-class';
import { StatusBar, View, Text } from 'react-native';
import { Provider } from 'react-redux';

import modules from './modules';
import { FullScreenLoading } from './components';


const App = createReactClass({

    getInitialState() {
        return {
            store: null
        };
    },

    componentDidMount() {
        StatusBar.setHidden(true);
    },

    render() {
        if (!this.state.store) {
            return <FullScreenLoading/>;
        }

        return (
            <Provider store={this.state.store}>
                <View>
                    <Text>
                        Hello App!
                    </Text>
                </View>
            </Provider>
        );
    }
});


export default App;