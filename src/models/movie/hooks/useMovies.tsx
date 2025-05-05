import { useEffect, useState } from "react";
import { movieStore } from '../../../store/store';
import { MovieApiImpl } from '../infrastructure/movieApi.impl';
import { MovieLocalImpl } from '../infrastructure/movieLocal.impl';


const movieApi = new MovieApiImpl()
const movieLocal = new MovieLocalImpl();

export const useMovies = () => {
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Usar el store de manera más eficiente
    const movies = movieStore(state => state.movies);
    const setViewModel = movieStore(state => state.setViewMode);
    const setQueryTerm = movieStore(state => state.setQueryTerm);
    const saveMovie = movieStore(state => state.saveMovie);
    const queryTerm = movieStore(state => state.queryTerm);
    const viewModel = movieStore(state => state.viewModel);

    // Fetch movies from the API
    useEffect(() => {
        const fetchMovies = async () => {
            if (!queryTerm) return;
            setIsLoading(true);
            setError(null);

            try {
                await movieApi.fetchMovies(queryTerm, page);
                const fetchedMovies = movieApi.getMovies();
                saveMovie(fetchedMovies);
                movieLocal.saveMovie(movies)
            } catch (err) {
                setError("Error al obtener las películas. Intenta nuevamente.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, [queryTerm, page, movieApi, saveMovie]);

    useEffect(() => {
        console.log(import.meta.env.API_KEY_MOVIE_DB)
        if (page < 1) {
            setPage(1)
        }
    }, [page])

    //handle page fetch for movies
    const handlePageChange = (num: number = 1) => {
        const numPage = Math.max(Math.min(page + num, movieApi.getTotalPage()), 0)
        setPage(numPage)
    }

    const moviePage = () => {
        return Array.from({ length: movieApi.getTotalPage() }, (_, index) => index + 1)
    }

    const numPagesShow = () => `${page} de ${movieApi.getTotalPage()}`

    return {
        movies,
        setQueryTerm,
        setPage,
        queryTerm,
        page,
        viewModel,
        setViewModel,
        isLoading,
        error,
        filteredMovies: movies.length,
        handlePageChange,
        moviePage,
        numPagesShow
    };
};