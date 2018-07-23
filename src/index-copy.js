import React, { Compnent }from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import SearchBooks from './Components/SearchBooks';


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
		if (!loading) {
			return <div>Loading...</div>
		}
		return(
			<div className="container">
				<App />
				<div className="row">
					<div className="col-sm-12">
						<form >
							<input  className="form-control" value={this.state.term} onChange={this.searchHandler}/>
						</form>
					</div>
            	</div>
				<ul className="list-group">
					{books.filter(searchingFor(this.state.term)).map(book => (
						<li key={book.ID} className="list-group">
							{book.Title} <br/>
							<img src={book.Image} />
						</li>
					))}
				</ul>
			</div>

		);
	}
}



ReactDOM.render(<Root />,document.getElementById('app'));