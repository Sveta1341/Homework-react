const apiKey = '1c3a2f981f61bd49f2b2f6d511373338'

export const getTrending = () => {
	return fetch(
		`https://api.themoviedb.org/3/trending/movie/day?api_key=1c3a2f981f61bd49f2b2f6d511373338`,
	)
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			throw new Error('not found');
		})
		.then(data => data.results)
		.catch(err => {
			throw err;
		});
};

export const fetchMoviesDetails = movieId => {
	return fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
	)
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			throw new Error('not found');
		})
		.catch(err => {
			throw err;
		});
};