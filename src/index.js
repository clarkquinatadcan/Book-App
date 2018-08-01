import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../public/css/index.css'
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'


class Root extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<App />
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<Root />,document.getElementById('app'))