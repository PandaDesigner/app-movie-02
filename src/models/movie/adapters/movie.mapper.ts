import { MovieResponse } from "../domain/movie.response.ts";
import { Movies } from "../domain/movie.entity.ts";
import { Utils } from "../../../utils/utils.ts";

export class MovieMapper {
    static mapperMovieToViewCardMode(movies: MovieResponse): Movies {
        return movies.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            year: Utils.getYearShort(movie.release_date),
            description: Utils.shortElipseString(movie.overview, 40),
            poster: Utils.getUrlImage(`${movie.poster_path}`),
            rating: movie.vote_average,
            createdAt: Utils.getDateNow(),
        }));
    }
}