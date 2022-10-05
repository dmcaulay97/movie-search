import React from 'react'

const MovieCard = ({ movie }) => {

    const imdbLink = (id) => {
        window.open(`https://www.imdb.com/title/${id}`)
    }

    return (
        <div className='movie' onClick={() => { imdbLink(movie.imdbID) }}>
            <div>
                <p>
                    {movie.Year}
                </p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;
