import React, { Component } from 'react';
import BookDetails from './BookDetails';
import { Link } from 'react-router-dom';

const BookItem = ({bookitem, handleClick}) => {

        return(
            
            <li className="list-group-item" onClick={() => handleClick(bookitem)} >
                <Link to='/details'>
                    <div className="singgle-bookitem">
                        <div className="bookitem-title">
                            <h5>{bookitem.Title}</h5>
                        </div>
                        <div className="bookitem-img">
                            <img src={bookitem.Image} />
                        </div>
                    </div>
                </Link>
            </li>
        );
}

export default BookItem;