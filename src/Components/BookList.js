import React, { Component } from 'react';
import BookItem from './BookItem';

class BookList extends React.Component {

// const BookList = ({Books}) => {

    render() {
        // console.log(this.props);
        const Books = this.props.Books;
        // console.log(Books);
        return(
            <div className="container">
                <h3 className="text-center">Available Books</h3>
                <div className="row justify-content-left">
                    <div className="col-sm-12 py-3">
                        <ul className="list-group">
                            {Books.map((book) => (
                                // <li key={book.ID} className="list-group-item">
                                //     <div className="sing-book">
                                //         <div className="book-title">
                                //             <h5>{book.Title}</h5>
                                //         </div>
                                //         <div className="book-img">
                                //             <img src={book.Image} />
                                //         </div>
                                //     </div>
                                // </li>
                                 <BookItem bookitem={book} key={book.ID}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookList;