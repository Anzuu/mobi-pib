/**
 * @author zzhao
 */
'use strict';
import React from 'react';
import Input from 'react-bootstrap/lib/Input.js';
import ButtonInput from 'react-bootstrap/lib/ButtonInput.js';
import rest from 'rest'
//require('bootstrap/dist/css/bootstrap.css');
require('bootstrap-webpack');
export default class Component extends React.Component {
    state = {
        url: ' ',
        input: '',
        responseEntity: ''
    }


    /**
     *
     */

    handleChange = (event) =>{
        this.setState({input: event.target.value});
        console.log(event.target.value);
    }

    setAreaLabel = () => {
        this.setState({url: this.state.input});
        rest(this.state.input).then((response)=>{this.setState({responseEntity: response.entity})});

    }

    render() {
        console.log("+" + this.state.input);
        return (
            <div id="inner-div">
                <form>
                    <Input type="text" value={this.state.input} label=" URL " placeholder="Enter URL"
                                       onChange={this.handleChange} />
                            <ButtonInput type="button" id="subBtn" bsSize="small" value="go" bsStyle="info"
                                       onClick={this.setAreaLabel}      />

                    <Input id="urlArea" type="textarea" label={this.state.url} value={this.state.responseEntity}/>
                </form>
            </div>
        );
    }

}
