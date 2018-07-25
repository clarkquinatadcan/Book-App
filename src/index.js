import React, { Compnent }from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Header'
import SearchBanner from './Components/SearchBanner'
import BookList from './Components/BookList'




class Root extends React.Component {
	constructor(props){
		super();
			this.state = {
				loading: false,
				books: [],
				type: 'React',
				boky: 'test'
			};
			this.apitypeHandler = this.apitypeHandler.bind(this)
			this.handleClick = this.handleClick.bind(this)
			this.handleClickBook = this.handleClick.bind(this)			
	}

	handleClick(e){
		alert("Show Console")
		// console.log(e)
		this.setState({
			boky: e.target.value
		})
	}
	handleClickBook(book){
		alert(book.Title)
	}


	apitypeHandler(e){
		// console.log(e)
		this.setState({
			type: e.target.value
		});
		this.getData()
	}

	getData(){
		const API_URL = "http://it-ebooks-api.info/v1/search/" + this.state.type
		console.log(API_URL)
		fetch(API_URL)
			.then(res => res.json())
			.then(json => {
				this.setState({
					loading: true,
					books: json.Books,
				})
			})
	}
	
	componentDidMount(){
		this.getData()	
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
					passonChange={(value) => this.apitypeHandler(value)}
				/>
				<BookList 
					handleClick={(Books) =>this.handleClick(Books)} 
					Load={loading} 
					Books={books}
				/>
			</div>

		);
	}
}



ReactDOM.render(<Root />,document.getElementById('app'))