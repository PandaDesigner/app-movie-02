import { Search } from "lucide-react";
import "./HeaderMovie.css";
import React from 'react';
import { useState } from "react";
import { useMovies } from '../../hooks/useMovies';


export const HeaderMovie = () => {
    const [inputValue, setInputValue] = useState("");
    const { setQueryTerm } = useMovies();

    const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setQueryTerm(inputValue);
            setInputValue('')
        }

    }

    return (
        <header className="header-movie">
            <div className="header-movie-container">
                <div className="header-movie-container-base">
                    <h1 className="header-movie-container-text">Catálogo de Películas</h1>
                    <div className="header-movie-input-container">
                        <div className="header-movie-input-container-icon">
                            <Search className="header-movie-input-icon" />
                        </div>
                        <input
                            type="text"
                            className="header-movie-input"
                            placeholder="Buscar por título o director..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => handleOnKeyPress(e)}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};