import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { button, colors } from '../../constants';

const Button = (props) => (
    <TouchableOpacity style={styles.container}
                        onPress={props.onPress}>
        <Text style={styles.text}>
            {props.text}
        </Text>
    </TouchableOpacity>
);

Button.propTypes = {};

Button.displayName = 'Button';


const styles = StyleSheet.create({
    container: {
        width: button.widthLong,
        height: button.heightTall,
        backgroundColor: 'transparent',
        borderRadius: button.borderRadius,
        borderWidth: button.borderWidth,
        borderColor: colors.primaryDark,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.primaryDark
    }
});

export default Button;