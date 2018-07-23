import React, { Component } from 'react';
import User from './User';


class App extends Component {
	render(){
		return(
			<div>
				<h1>App Component Imported</h1>

				<User />
			</div>
		);
	}
}

export default App;