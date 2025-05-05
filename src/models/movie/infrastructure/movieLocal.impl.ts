import {MovieLocalRepository} from "../repository/movieLocal.repository.ts";
import {Movies} from "../domain/movie.entity.ts";


export class MovieLocalImpl implements MovieLocalRepository{
    private readonly MOVIE_KEY = "MOVIE_KEY";


    deleteMovie ( ) : void {
        localStorage.removeItem(this.MOVIE_KEY);
    }

    getMovies () : Movies {
        try {
            const movies = localStorage.getItem(this.MOVIE_KEY);
            if (!movies) return [] as Movies;

            const parsedMovies = JSON.parse(movies);
            return parsedMovies as Movies;
        } catch (error) {
            console.error('Error parsing movies from localStorage:', error);
            return [] as Movies;
        }
    }
    
    saveMovie ( movie : Movies ) : void {
        localStorage.setItem(this.MOVIE_KEY, JSON.stringify(movie));
    }

}