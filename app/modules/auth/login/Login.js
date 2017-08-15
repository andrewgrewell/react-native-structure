import React from 'react';
import createReactClass from 'create-react-class';
import { View, StyleSheet } from 'react-native';

import { FormField } from '../../../components';
import { screenHeight, screenPadding } from '../../../constants/layout';


const Login = createReactClass({
    displayName: 'Login',
    propTypes: {},

    render() {
        return (
            <View style={styles.container}>
                <FormField label="username"/>
                <FormField label="password" inputProps={{ secureTextEntry: true }}/>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1,
        maxHeight: screenHeight * 0.5,
        padding: screenPadding,
        backgroundColor: 'transparent'
    }
});


export default Login;