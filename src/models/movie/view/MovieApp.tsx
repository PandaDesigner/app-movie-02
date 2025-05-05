import ErrorBoundary from '../../error/ErrorBoundary.tsx';
import { useMovies } from '../hooks/useMovies.tsx';
import './MovieApp.css';
import { HeaderMovie } from "./ui/HeaderMovie.tsx";
import { SelectedHeader } from "./ui/SelectedHeader.tsx";
import { ViewCardMode } from "./ui/ViewCardMode.tsx";
import { ViewTableMovie } from "./ui/ViewTableMovie.tsx";



export const MovieApp = () => {

    const { viewModel, handlePageChange, numPagesShow } = useMovies()



    return (
        <ErrorBoundary>
            <div className="movie-app-container">
                <HeaderMovie />
                <SelectedHeader />
                {viewModel === 'card' && <ViewCardMode />}
                {viewModel === 'table' && <ViewTableMovie />}
                <div className='movie-button-container'>
                    <button onClick={() => handlePageChange(-1)}
                        className='movie-app-button'> prev </button>
                    <p className='text-indigo-900 font-medium text-sm'>{numPagesShow()}</p>
                    <button onClick={() => handlePageChange()}
                        className='movie-app-button'> next </button>

                </div>
            </div>
        </ErrorBoundary>
    );
};