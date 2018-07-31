import React from 'react'

const BookDetails = ({bookItemDetails}) => {
    console.log(bookItemDetails.Title)
    return(
        <div className="container">
            <h1>Book Details </h1>
            <p>{bookItemDetails.Title}</p>
            <img src={bookItemDetails.Image} />
        </div>
    );
}

export default BookDetails