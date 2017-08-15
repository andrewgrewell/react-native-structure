import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { button } from '../../constants';


const ButtonContainer = (props) => (
    <View style={getStyle(props)}>
        {props.children}
    </View>
);

function getStyle(props) {
    if (props.bottom) {
        return [styles.container, styles.bottom];

    }

    return styles.container;
}

ButtonContainer.propTypes = {
    bottom: PropTypes.bool
};

ButtonContainer.displayName = 'ButtonContainer';

const styles = StyleSheet.create({
    container: {
        height: button.containerHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
});

export default ButtonContainer;