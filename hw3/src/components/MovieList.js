import { useEffect, useState } from "react";
import { getTrending } from "../api";
import { MovieItem } from './MovieItem'
import '../theme/MovieItem.css'

export const MovieList = ({ history }) => {
	const [response, setResponse] = useState([])

	useEffect(() => {
		getTrending().then((data) => setResponse(data))

	}, [])

	return (
		<div className="list-movies-block">
			<ul className="list-movies">
				{response && response.map(({ title, id, vote_average, poster_path, release_date }) => <MovieItem history={history} vote_average={vote_average} poster_path={poster_path} release_date={release_date} title={title} key={id} id={id} />)}
			</ul>
		</div>
	)

}
export default MovieList;