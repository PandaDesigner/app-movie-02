import { Movies } from "../domain/movie.entity.ts";
import * as React from "react";

export interface MovieApiRepository {
    fetchMovies: (query: string, page?: number) => void;
    saveMovie: (setState: React.Dispatch<React.SetStateAction<Movies>>) => void;
    getMovies: () => Movies;
    getTotalPage: () => number
}