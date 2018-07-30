import React, { Compnent }from 'react'
import ReactDOM from 'react-dom'
import '../public/css/index.css'
import Header from './Components/Header'
import SearchBanner from './Components/SearchBanner'
import BookList from './Components/BookList'
import BookDetails from './Components/BookDetails'




class Root extends React.Component {
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
		// console.log(bookItem.Title)
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
				<BookDetails test={this.state.bookItem}/>
			</div>

		);
	}
}



ReactDOM.render(<Root />,document.getElementById('app'))