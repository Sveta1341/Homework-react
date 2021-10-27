import './App.css';
import { Route, Switch } from 'react-router-dom'
import { MovieDetails } from './pages/MovieDetails';
import { NotFound } from './pages/NotFound';
import { MoviesPage } from './pages/Movies';


function App() {
	return (
		<Switch>
			<Route exact path='/' component={MoviesPage} />
			<Route path='/:id' component={MovieDetails} />
			<Route component={NotFound} />


		</Switch>
	);
}

export default App;
