import { useEffect, useState } from "react";
import { fetchMoviesDetails } from "../api";
import CircularProgress from '@mui/material/CircularProgress';
import '../theme/Moviedetails.css'
import { Comment } from "./Comment";
import { Grid, Paper } from "@material-ui/core";




export const MovieDetailsContainer = ({ match }) => {

	const [movie, setMovie] = useState({})

	const movieId = match.params.id;
	useEffect(() => {
		if (movieId) {
			fetchMoviesDetails(movieId).then((res) => setMovie(res))
		}
	}, [movieId])

	const titleJSX = movie && movie.title;
	const vote = movie && (movie.vote_average) * 10;
	const overview = movie && movie.overview;

	const [comments, setComments] = useState([]);
	const onSaveComment = (data) => {
		setComments((prev) => [...prev, data])
	}


	return (
		<>
			<div className="details-block">
				<div className="poster">
					<img className="poster-img" src={`https://image.tmdb.org/t/p/w300/${movie && movie.poster_path}`} alt='' />
				</div>
				<div className="description">
					<h1 className="title">{titleJSX}</h1>
					<CircularProgress className="progress" variant="determinate" value={vote} />
					<span className="progress-value">{vote} % </span>
					<h2 className="overview">Overview</h2>
					<p className="overview-text">{overview}</p>
				</div>
			</div>
			<div>
				<Comment onSaveComment={onSaveComment} />
				{comments && comments.map(({ comment, time }) =>
					<Paper style={{ width: "300px", height: "80px" }}>
						<Grid>{comment}</Grid>
						<p style={{ color: "gray" }}>posted {time}</p>
					</Paper>)}
			</div>
		</>
	)
}