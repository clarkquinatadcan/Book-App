import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import BookDetails from './BookDetails';
import BookItem from './BookItem';

class Router extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path='/details' component={BookItem} />
            </Switch>
        )
    }
}

export default Router