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
			})
			.catch((err) => {
				console.log(err);
			});
}
