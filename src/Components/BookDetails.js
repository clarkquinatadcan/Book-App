import React from 'react'

const BookDetails = ({test}) => {
    console.log(test.Title)
    return(
        <div className="container">
            <h1>Book Details </h1>
            <p>{test.Title}</p>
        </div>
    );
}

export default BookDetails