import React, { Compnent }from 'react'
import ReactDOM from 'react-dom'
import '../public/css/index.css'
import Header from './Components/Header'
import SearchBanner from './Components/SearchBanner'
import BookList from './Components/BookList'




class Root extends React.Component {
	constructor(props){
		super();
			this.state = {
				loading: false,
				books: [],
				type: 'Scala',
			};
			this.apitypeHandler = this.apitypeHandler.bind(this)	
	}



	apitypeHandler(e){
		this.setState({
			type: e
		});
		console.log(e)
		this.getData(e)
	}

	getData(e){
		const API_URL = "http://it-ebooks-api.info/v1/search/" + e
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
		this.getData(this.state.type)
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
				/>
			</div>

		);
	}
}



ReactDOM.render(<Root />,document.getElementById('app'))