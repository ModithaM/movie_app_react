import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import nullImage from "../assets/No-image-available.jpg"

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    //add to favorite function
    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    //word limitting function for movie discription
    const limitText = (text, wordLimit) => { 
        const words = text.split(' ');
        return words.length > wordLimit
          ? words.slice(0, wordLimit).join(' ') + '...'
          : text;
      };

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : nullImage} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{limitText(movie.overview, 20)}</p>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div> 
    );
}

export default MovieCard