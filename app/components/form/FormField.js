import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { colors, layout, text } from '../../constants';

const FormField = (props) => (
    <View style={styles.container}>
        <Text style={styles.label}>
            {props.label}
        </Text>
        <TextInput selectionColor="white"
                   style={styles.input}
                   {...props.inputProps}/>
    </View>
);

FormField.propTypes = {
    label: PropTypes.string
};

FormField.displayName = 'FormField';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginBottom: layout.spaceDefault,
        borderBottomWidth: 1,
        borderBottomColor: colors.semiTransparentLight
    },
    label: {
        color: colors.primaryDark,
        marginBottom: layout.spaceSmall,
        fontSize: text.sizeSmall
    },
    input: {
        color: colors.textLight
    }
});


export default FormField;