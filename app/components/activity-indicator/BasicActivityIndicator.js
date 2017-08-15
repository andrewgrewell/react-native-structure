import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


const BasicActivityIndicator = ({ centered, ...props }) => {
    return centered ? renderCentered(props) : render(props);
};

function renderCentered(props) {
    return (
        <View style={styles.centered}>
            <ActivityIndicator {...props} />
        </View>
    );
}

function render(props) {
    return <ActivityIndicator {...props}/>;
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignSelf: 'stretch'
    }
});

BasicActivityIndicator.propTypes = {
    ...ActivityIndicator.propTypes,
    centered: PropTypes.bool
};

BasicActivityIndicator.displayName = 'BasicActivityIndicator';


export default BasicActivityIndicator;