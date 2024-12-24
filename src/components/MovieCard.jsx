function MovieCard({movie}) {

    function addToFav() {
        alert("Added to Favourites");
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="fav-btn" onClick={addToFav}>♡</button>
                </div>
            </div>
            <div className="movie-information">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
            </div>
        </div>
    );
}

export default MovieCard;