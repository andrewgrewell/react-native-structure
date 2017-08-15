import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import { View, StyleSheet } from 'react-native';

import { FormField, ButtonContainer, Button } from 'app/components';
import { screenHeight, screenPadding } from 'app/constants/layout';


const LoginForm = createReactClass({
    displayName: 'LoginForm',

    propTypes: {
        attemptLogin: PropTypes.func.isRequired
    },

    getInitialState() {
        return {
            busy: false
        };
    },

    onUsernameChange(username) {
        this.setState({ username });
    },

    onPasswordChange(password) {
        this.setState({ password });
    },

    tryLogin() {
        this.setState({ busy: true });
        this.props.attemptLogin(this.state.username, this.state.password);
    },

    render() {
        // This would be better by using an abstract Form component, that took the fields to display
        // and handled the on submit by calling a callback, as well as displaying errors
        return (
            <View style={styles.container}>
                <FormField label="username"
                           inputProps={{
                               onChangeText: this.onUsernameChange
                           }}/>
                <FormField label="password"
                           inputProps={{
                               onChangeText: this.onPasswordChange,
                               secureTextEntry: true
                           }}/>
                <ButtonContainer bottom>
                    <Button text="LOGIN" onPress={this.tryLogin} busy={this.state.busy}/>
                </ButtonContainer>
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


export default LoginForm;