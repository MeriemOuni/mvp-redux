import React from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'
import '../App.css'

const MoviesList = () => {
    const movies = useSelector(state => state.movieReducer.movieData)
    return (
        <div className='movies'>
            {movies.map( el => (<MovieCard movies={el} key={el.id}/>))}
        </div>
    )
}

export default MoviesList
