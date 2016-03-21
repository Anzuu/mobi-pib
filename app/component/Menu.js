'use strict';
import React from 'react';
import Input from 'react-bootstrap/lib/Input.js';
import ButtonInput from 'react-bootstrap/lib/ButtonInput.js';
import Navbar from 'react-bootstrap/lib/Navbar.js';
import Nav from 'react-bootstrap/lib/Nav.js';
import NavItem from 'react-bootstrap/lib/NavItem.js';
import NavDropdown from 'react-bootstrap/lib/NavDropdown.js'
import MenuItem from 'react-bootstrap/lib/MenuItem.js'
import rest from 'rest';
import FA from 'react-fontawesome';

import Suche from './Suche';
import Archiv from './Archiv';

require('bootstrap-webpack');
require('font-awesome/css/font-awesome.css');

export default class Menu extends React.Component {


    constructor(){
        super();
        this.state = { home: (<div id="home-content-div">Willkommen</div>)
            , content: this.home,
            navCss: ({margin: '0',
                backgroundColor: '#c4e3f3'})
        }
    }


    handleSelect =(key) =>{
        console.log(key);
        this.setState({ expanded: false })
        switch (key) {
            case '1':
                this.setState({content: this.state.home});
                break;
            case '2':
                this.setState({content: <Suche style={this.state.navCss}/>});
                break;
            case '3':
                this.setState({content: <Archiv style={this.state.navCss}/>});
                break;
        }

    }


    render() {
        return (
            <div id="menu-div">
                    <Navbar id="navbar" expanded={this.state.expanded}
                            onToggle={expanded => this.setState({ expanded })} style={this.state.navCss}>
                        <Navbar.Header>
                            <Navbar.Brand>
                                vwd
                            </Navbar.Brand>
                            <Navbar.Toggle   />
                            <Nav pullRight><Navbar.Brand><FA name="sign-out"/></Navbar.Brand></Nav>
                        </Navbar.Header>

                        <Navbar.Collapse >
                            <Nav pullLeft onSelect={this.handleSelect}>
                                <NavItem eventKey="1">Home  <FA name="home"/></NavItem>
                                <NavItem eventKey="2">Suche  <FA name="search"/></NavItem>
                                <NavItem eventKey="3">Archiv  <FA name="archive"/></NavItem>
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>
                {this.state.content}
            </div>

        );
    }

}
