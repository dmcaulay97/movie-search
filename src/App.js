import React, { useState } from 'react';
import { useEffect } from 'react';
import MovieCard from './MovieCard';

import './App.css'

import SearchIcon from './search.svg'

//308e0e47

const API_URL = 'https://www.omdbapi.com?apikey=308e0e47'

const movie1 = {
    "Title": "The Big Lebowski",
    "Year": "1998",
    "imdbID": "tt0118715",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX300.jpg"
}


const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('star wars')
    }, [])

    const enterSearch = (e) => {
        if (e.code === 'Enter') {
            const searchButton = document.getElementById('searchButton')
            searchButton.click()
        }
    }

    return (
        <div className='app'>
            <h1>Movie Search</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                    onKeyPress={(e) => enterSearch(e)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { searchMovies(searchTerm) }}
                    id="searchButton"
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>

                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )}

        </div>
    );
}

export default App