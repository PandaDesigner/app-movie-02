import { Grid, List } from "lucide-react";
import './SelectedHeader.css'
import { useMovies } from '../../hooks/useMovies';


export const SelectedHeader = () => {

    const { viewModel, setViewModel, filteredMovies } = useMovies();



    return (
        <>
            <div className="movie-selection">
                <h2 className="movie-selection__count">
                    {filteredMovies} {filteredMovies === 1 ? 'Resultado' : 'Resultados'}
                </h2>
                <div className="movie-selection__toggle">
                    <button
                        onClick={() => setViewModel('card')}
                        className={`movie-selection__toggle-button ${viewModel === 'card'
                            ? 'movie-selection__toggle-button--active'
                            : 'movie-selection__toggle-button--inactive'}`}
                    >
                        <Grid className="movie-selection__toggle-icon" />
                    </button>
                    <button
                        onClick={() => setViewModel('table')}
                        className={`movie-selection__toggle-button ${viewModel === 'table'
                            ? 'movie-selection__toggle-button--active'
                            : 'movie-selection__toggle-button--inactive'}`}
                    >
                        <List className="movie-selection__toggle-icon" />
                    </button>
                </div>
            </div>
        </>
    );
};