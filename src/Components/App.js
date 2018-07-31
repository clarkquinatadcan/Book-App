import React, { Component } from 'react'

import Header from './Header'
import SearchBanner from './SearchBanner'
import BookList from './BookList'
import BookDetails from './BookDetails'

import Router from './Router';




class App extends React.Component {
	constructor(props){
		super();
		this.state = {
			loading: false,
			books: [],
			type: 'Scala',
			bookItem: '',
		};
		// this.apitypeHandler = this.apitypeHandler.bind(this)	
	}


	apitypeHandler = (e) => {
		this.setState({
			type: e
		});
		this.getData(e)
	}
	
	getData = (e) => {
		const API_URL = "http://it-ebooks-api.info/v1/search/" + e
		fetch(API_URL)
			.then(res => res.json())
			.then(json => {
				this.setState({
					loading: true,
					books: json.Books,
				})
			})
	}

	componentDidMount = () => {
		this.getData(this.state.type)
	}
	
	handleClickItem = (bookItem) => {
		this.setState({
			bookItem: bookItem
		})
	}


	render(){
		const { loading, books } = this.state
		// console.log(books);
		// if (!loading) {
		// 	return <div>Loading...</div>
			
		// }
		return(
			<div>
				<Header />
				<SearchBanner 
					passTerm={this.state.type} 
					passonChange={this.apitypeHandler}
				/>
				<BookList 
					Load={loading} 
					Books={books}
					handleClick={this.handleClickItem}
				/>
				<BookDetails bookItemDetails={this.state.bookItem}/>
				<Router />
			</div>

		);
	}
}

export default App