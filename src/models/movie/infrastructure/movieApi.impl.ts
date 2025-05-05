import { MovieApiRepository } from "../repository/movieApi.repository.ts";
import { Movies } from "../domain/movie.entity.ts";
import * as React from "react";
import { Utils } from "../../../utils/utils.ts";
import { MovieMapper } from "../adapters/movie.mapper.ts";


export class MovieApiImpl implements MovieApiRepository {
    private movies: Movies = [];
    private page: number = 0;

    getMovies() {
        return this.movies;
    }

    async fetchMovies(query: string, page?: number): Promise<void> {
        console.log("Fetching movies with query:", query, "and page:", page);
        try {
            if (query.trim().length === 0) throw new Error("No movies were found");
            const response = await fetch(Utils.getUrlMovie(query, page));
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            this.page = data.total_pages
            this.movies = MovieMapper.mapperMovieToViewCardMode(data);
            console.log("Movies fetched successfully:", this.movies);
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    }

    saveMovie = (setState: React.Dispatch<React.SetStateAction<Movies>>): void => {
        console.log("saveMovie ---> ", this.movies);
        setState((state) => ({
            ...state,
            movies: this.movies,
        }));
    };

    getTotalPage() {
        return this.page;
    }
}