import React from "react"
import MovieCard from "./MovieCard"

const MovieList = ({ movies }) => {
  // If no movies found
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No movies found. Try searching for something else.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
