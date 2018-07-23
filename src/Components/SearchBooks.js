import React, { Component } from 'react';
import { Z_VERSION_ERROR } from 'zlib';

class SearchBooks extends React.Component {
    constructor(props){
        super();
        this.state = {
            text: ""
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({text: e.target.value})
    }

    render(){
        return(
            <div className="row">
                <div className="col-sm-12">
                    <input  className="form-control" value={this.state.text} onChange={this.onChange}/>
                </div>
            </div>
        );
    }
}

export default SearchBooks;