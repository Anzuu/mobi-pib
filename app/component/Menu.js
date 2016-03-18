'use strict';
import React from 'react';
import Input from 'react-bootstrap/lib/Input.js';
import ButtonInput from 'react-bootstrap/lib/ButtonInput.js';
import Navbar from 'react-bootstrap/lib/Navbar.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/NavItem.js';
import NavDropdown from 'react-bootstrap/lib/NavDropdown.js'
import MenuItem from 'react-bootstrap/lib/MenuItem.js'
import rest from 'rest'
import FA from 'react-fontawesome';
require('bootstrap-webpack');
require('font-awesome/css/font-awesome.css');

export default class Menu extends React.Component {
    state = {}

    handleSelect(key) {

    }
    render() {
        return (
            <div id="menu-div">
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        vwd

                    </Navbar.Brand>
                    <Navbar.Toggle /><Navbar.Brand><Nav pullRight><FA name="sign-out"/></Nav></Navbar.Brand>
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav pullLeft onSelect={this.handleSelect}>
                        <NavItem eventKey="1">Home <FA name="home"/></NavItem>
                        <NavItem eventKey="2">Suche <FA name="search"/></NavItem>
                        <NavItem eventKey="3">Archiv<FA name="archive"/></NavItem>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
                <div id="content-div"></div>
            </div>

        );
    }

}
