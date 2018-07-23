import React, { Component } from 'react';

class SearchBanner extends React.Component {

    render(){
        return(
            <div className="HomeSearch py-5">
                <h1 className="text-center">Lorem Ipsum</h1>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <form>
                            <input className="form-control" placeholder="Search Books..."/>
                        </form>
                    </div>
                    <p></p>
                </div>
            </div>
        );
    }
}

export default SearchBanner;