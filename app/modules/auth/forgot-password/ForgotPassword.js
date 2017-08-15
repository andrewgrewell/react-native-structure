import React from 'react';
import createReactClass from 'create-react-class';
import { View, Text } from 'react-native';


const ForgotPassword = createReactClass({
    displayName: 'ForgotPassword',
    propTypes: {},

    render() {
        return (
            <View>
                <Text>
                    Forgot Password...
                </Text>
            </View>
        );
    }
});


export default ForgotPassword;