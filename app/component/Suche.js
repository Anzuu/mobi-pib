'use strict';
import React from 'react';
import rest from 'rest';
import FA from 'react-fontawesome';
import Navbar from 'react-bootstrap/lib/Navbar.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import Input from 'react-bootstrap/lib/Input.js';
import Button from 'react-bootstrap/lib/Button.js';
import Glyphicon from 'react-bootstrap/lib/Glyphicon.js';

require('bootstrap-webpack');
require('font-awesome/css/font-awesome.css');


export default class Suche extends React.Component {
    state = {}

    constructor(){
        super();
    }
    render() {
        return (

            <div id="search-content-div">
                <Navbar id="search-bar" style={this.props.style}>
                    <Nav pullLeft><Input type="text" placeholder="WKN/ISIN/Name"/><Button type="submit"><Glyphicon glyph="search" /></Button></Nav>

                </Navbar>
            </div>
        );
    }

}