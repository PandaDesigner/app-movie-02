import { Movies } from "../models/movie/domain/movie.entity.ts";
import { create } from "zustand";

interface MovieState {
    movies: Movies;
    viewModel: 'card' | 'table';
    queryTerm: string;
}

interface MovieAction {
    saveMovie: (data: Movies) => void
    setViewMode: (viewMode: 'card' | 'table') => void;
    setQueryTerm: (queryTerm: string) => void;
}

type MovieStore = MovieState & MovieAction;

export const movieStore = create<MovieStore>()((set) => ({
    movies: [] as Movies,
    viewModel: 'card',
    queryTerm: '',
    setViewMode: (viewModel: 'card' | 'table') => {
        set((state) => {
            if (state.viewModel === viewModel) return state;
            return { ...state, viewModel };
        });
    },
    saveMovie: (data: Movies) => {
        set((state) => {
            return { ...state, movies: data };
        });
    },
    setQueryTerm: (queryTerm: string) => {
        set((state) => {
            if (state.queryTerm === queryTerm) return state;
            return { ...state, queryTerm };
        });
    },
}));
