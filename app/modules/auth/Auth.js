import React from 'react';
import { connect } from 'react-redux';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

import { default as authState } from './redux/name';
import { BackgroundVideo, FullScreen, ErrorField } from '../../components';
import { screenNames } from './constants';
import { LoginForm } from './components';
import { attemptLogin } from './redux/actions';


const Auth = createReactClass({
    displayName: 'Auth',

    propTypes: {
        error: PropTypes.object,
        attemptLogin: PropTypes.func
    },

    getInitialState() {
        return {
            activeScreen: screenNames.login
        };
    },

    render() {
        return (
            <FullScreen>
                <BackgroundVideo source={require('../../assets/video/clouds.mp4')}
                                 repeat/>
                {this.renderActiveScreen()}
                {this.renderScreenLinks()}
                {this.checkRenderError()}
            </FullScreen>
        );
    },

    renderActiveScreen() {
        switch (this.state.activeScreen) {
            case screenNames.login: return (
                <LoginForm attemptLogin={this.props.attemptLogin}
                           error={this.props.error}/>
            );
            case screenNames.signup: return <Signup/>;
        }
    },

    renderScreenLinks() {
        // this is where links for signup / forgot password would be rendered
    },

    checkRenderError() {
        if (!this.props.error) {
            return;
        }
        console.log('error message: ', this.props.error.userMessage);
        return <ErrorField error={this.props.error}/>;
    }
});


export default connect(
    (state) => ({
        error: state[authState].error
    }),
    (dispatch) => ({
        attemptLogin: (username, password) => dispatch(attemptLogin(username, password))
    })
)(Auth);