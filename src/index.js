import React, { Compnent }from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import SearchBooks from './Components/SearchBooks';
import Header from './Components/Header';
import SearchBanner from './Components/SearchBanner';
import BookList from './Components/BookList';


function searchingFor(term){
	return function(x){
		return x.Title.toLowerCase().includes(term.toLowerCase()) || !term ;
	}
}


class Root extends React.Component {
	constructor(props){
		super();
			this.state = {
				loading: false,
				books: [],
				term: '',
			};
			this.searchHandler = this.searchHandler.bind(this);
	}

	searchHandler(e) {
		this.setState({term: e.target.value});
	}
	
	componentDidMount(){
		const type = "python";
		// const API_URL = "http://it-ebooks-api.info/v1/search/${this.state.term}";
		const API_URL = "http://it-ebooks-api.info/v1/search/" + type;
		fetch(API_URL)
			.then(res => res.json())
			.then(json => {
				this.setState({
					loading: true,
					books: json.Books,
				});
			})
		
	}
	

	render(){
		const { loading, books } = this.state;
		// console.log(books);
		// if (!loading) {
		// 	return <div>Loading...</div>
		// }
		const user = {
			name: "clark",
			hobbies: ["sleeping", "eating"]
		};
		// console.log(user);
		return(
			<div>
				<Header />
				<SearchBanner />
				<BookList name={"Jhony"} PasspropstoChild={user} Books={books}/>

				{/* <div className="container">
					<App />
					<div className="row">
						<div className="col-sm-12">
							<form >
								<input  className="form-control" value={this.state.term} onChange={this.searchHandler}/>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<ul className="list-group flex-row flex-wrap justify-content-around">
								{books.filter(searchingFor(this.state.term)).map(book => (
									<li key={book.ID} className="list-group-item">
										{book.Title} <br/>
										<img src={book.Image} />
									</li>
								))}
							</ul>
						</div>
					</div>
				</div> */}
			</div>

		);
	}
}



ReactDOM.render(<Root />,document.getElementById('app'));