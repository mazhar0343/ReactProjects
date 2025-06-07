import "../css/Favorites.css"
import {useMovieContext} from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard.jsx";

function Favorites() {
    const {favorites} = useMovieContext();

    if(favorites){
        return <div className="movies-grid">
            {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    }

    return (
        <div className="favorites">
            <h1> No Favorites yet</h1>
        </div>
    )
}

export default Favorites;