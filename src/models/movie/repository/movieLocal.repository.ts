import { Movies } from "../domain/movie.entity.ts";

export interface MovieLocalRepository {
    saveMovie: (movie: Movies) => void;
    getMovies: () => Movies;
    deleteMovie: () => void;
}