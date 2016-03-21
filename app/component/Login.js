'use strict';
import React from 'react';
import Input from 'react-bootstrap/lib/Input.js';
import ButtonInput from 'react-bootstrap/lib/ButtonInput.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';
import rest from 'rest'
import FA from 'react-fontawesome';
//import LoginController from './LoginController'
require('bootstrap-webpack');
require('font-awesome/css/font-awesome.css');

export default class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }
    //checkInput(){
    //return <LoginController user={this.state.username} pword={this.state.password}/>;

    //}

    render() {
        return (
            <div id="login-div">
                <form className="form-horizontal">
                    <Input type="text" bsSize="small" value={this.state.username} label="Benutzername"/>
                    <Input type="password" bsSize="small" value={this.state.password} label="Passwort"/>
                     <ButtonInput onCLick={this.checkInput} type="submit" value="einloggen" bsSize="small"/>

                </form>
                <FA name="spinner" spin/>
            </div>


        );
    }

}