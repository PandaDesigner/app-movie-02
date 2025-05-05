import { Star } from "lucide-react";
import "./ViewTableMovie.css";
import { useMovies } from '../../hooks/useMovies.tsx';


export const ViewTableMovie = () => {
    const { movies } = useMovies()

    return (
        <div className="table-container">
            <table className="table table-fixed">
                <thead className="table__header">
                    <tr>
                        <th scope="col" className="table__header-cell">Título</th>
                        <th scope="col" className="table__header-cell">Año</th>
                        <th scope="col" className="table__header-cell">Description</th>
                        <th scope="col" className="table__header-cell">Calificación</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {movies.map(movie => (
                        <tr key={movie.id} className="table__row">
                            <td className="table__cell">
                                <div className="table__cell-content">
                                    <div className="table__cell-icon">
                                        {/* <Film className="table__icon-placeholder" /> */}
                                        <img
                                            src={movie.poster}
                                            alt={movie.title}
                                            className="table__cell-icon-image"
                                        />
                                    </div>
                                    <div className="table__cell-text">
                                        <div className="table__movie-title">{movie.title}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="table__cell table__text">{movie.year}</td>
                            <td className="table__cell table__text">{movie.description}</td>
                            <td className="table__cell">
                                <div className="table__rating">
                                    <Star className="table__rating-icon" />
                                    <span className="table__text">{movie.rating}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};