$(document).ready(() => {
	//alert(1);  just for inital test
	$('#searchForm').on('submit', (e) =>  {
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault ();
	});
});

function getMovies (searchText){
	//console.log(searchText);
	axios.get('http://www.omdbapi.com?s='+searchText)    //call to the IMDB-like API
			.then((response) => {
				console.log(response);
				let movies = response.data.Search;
				let output = '';
				$.each(movies, (index, movie) => {
					output += `
						<div class="col-md-3">
							<div class="well text-center">
								<img src="${movie.Poster}">
								<h5>${movie.Title}</h5>
								<a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
							</div>
						</div>
					`;
				});

				$('#movies').html(output);
			})
			.catch((err) => {
				console.log(err);
			});
}
