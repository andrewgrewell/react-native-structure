import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import { colors, layout } from 'app/constants';


const ErrorField = ({ error }) => (
    <View style={styles.container}>
        <Text style={styles.text}>
            {error.userMessage}
        </Text>
    </View>
);

ErrorField.propTypes = {
    error: PropTypes.object // this would be a class
};

ErrorField.displayName = 'ErrorField';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        paddingVertical: layout.spaceSmall,
        backgroundColor: 'rgba(200, 200, 200, 0.25)'
    },
    text: {
        textAlign: 'center',
        color: colors.errorText
    }
});


export default ErrorField;