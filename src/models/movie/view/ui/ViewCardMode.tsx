import './ViewCardMode.css';
import { Star } from "lucide-react";
import { useMovies } from '../../hooks/useMovies.tsx';


export const ViewCardMode = () => {

    const { movies } = useMovies()

    return (
        <div className="card-grid">
            {movies.map(movie => (
                <div key={movie.id} className="card-grid__card">
                    <div className="card-grid__card-image-container">
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className="card-grid__card-image"
                        />
                        <div className="card-grid__rating-badge">
                            <Star className="card-grid__rating-icon" />
                            <span className="card-grid__rating-text">{movie.rating}</span>
                        </div>
                    </div>
                    <div className="card-grid__card-content">
                        <h3 className="card-grid__card-title">{movie.title}</h3>
                        <p className="card-grid__card-year">{movie.year}</p>
                        <p className="card-grid__card-director">descrption: {movie.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};