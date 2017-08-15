import React from 'react';
import createReactClass from 'create-react-class';

import { BackgroundVideo, FullScreen } from '../../components';
import { screenNames } from './constants';

import { Container as Login } from './login';
import { Container as Signup } from './signup';
import { Container as ForgotPassword } from './forgot-password';


const Auth = createReactClass({
    displayName: 'Auth',
    propTypes: {},

    getInitialState() {
        return {
            activeScreen: screenNames.login
        };
    },

    render() {
        return (
            <FullScreen>
                <BackgroundVideo source={require('../../assets/video/clouds.mp4')}
                                 loop/>
                {this.renderActiveScreen()}
            </FullScreen>
        );
    },

    renderActiveScreen() {
        switch (this.state.activeScreen) {
            case screenNames.login: return <Login/>;
            case screenNames.signup: return <Signup/>;
            case screenNames.forgotPassword: return <ForgotPassword/>;
        }
    }
});


export default Auth;