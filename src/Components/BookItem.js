import React, { Component } from 'react';




class BookItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading : false
        };
    }
    

    componentDidMount(){
        // const bookItem = this.props.bookitem;
        // (bookItem => (
        //     this.setState({loading: true})
        // ))
        this.setState({loading: true})

    }
   

    render(){
        const bookItem = this.props.bookitem;
        const { loading } = this.state;
        // console.log(bookItem);
        if (!loading) {
            return <div>Loading... </div>
        }
        return(
            <li key={bookItem.ID} className="list-group-item">
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