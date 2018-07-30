import React, { Component } from 'react';

class BookItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading : false
        };
    }

    


    // ClickMe = (bookItem) => {
    //     alert('test')
    //     console.log(bookItem)
    // }

    render(){
        const bookItem = this.props.bookitem;
        const { loading } = this.state;
        // console.log(this.props.handleClick)
        // console.log(bookItem);
        // if (!loading) {
        //     return <div>Loading... </div>
        // }
        return(
            <li className="list-group-item" onClick={() => this.props.handleClick(bookItem)} >
                <div className="singgle-bookItem">
                    <div className="bookItem-title">
                        <h5>{bookItem.Title}</h5>
                    </div>
                    <div className="bookItem-img">
                        <img src={bookItem.Image} />
                    </div>
                </div>
            </li>
        );
    }
}

export default BookItem;