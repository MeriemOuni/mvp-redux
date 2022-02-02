import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'

const MoviesList = () => {
    const movies = useSelector(state => state.movieReducer.movieData)
    return (
        <div>
            {movies.map( el => (<MovieCard movies={el} key={el.id}/>))}
        </div>
    )
}

export default MoviesList
