import React, { Component } from 'react'
import BookItem from './BookItem'
import BookDetails from './BookDetails'

const BookList = ({Books, handleClick}) => {

        // console.log(Books)
        // console.log(Load)
        // console.log(handleClick)

        return(
            <div className="container py-5">
                <h3 className="text-center">Available Books</h3>
                {/* <hr /> */}
                {/* <BookDetails /> */}
                <div className="row justify-content-left">
                    <div className="col-sm-12 py-3">
                        <ul className="list-group flex-row flex-wrap justify-content-center">
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