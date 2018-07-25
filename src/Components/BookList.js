import React, { Component } from 'react'
import BookItem from './BookItem'
import BookDetails from './BookDetails'

const BookList = ({Books, handleClick}) => {

        // console.log(Books)
        // console.log(Load)
        // console.log(handleClick)

        return(
            <div className="container">
                <h3 className="text-center">Available Books</h3>
                <button className="btn btn-primary" onClick={(Books) => handleClick(Books)}>Click Book List</button>
                <hr />
                <BookDetails ClickData={handleClick}/>
                <div className="row justify-content-left">
                    <div className="col-sm-12 py-3">
                        <ul className="list-group">
                            {
                                Books
                                    ?  Books.map((book) => (
                                            <BookItem bookitem={book} key={book.ID}/>
                                        ))
                                    : <div>No result found.</div>
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
}

export default BookList