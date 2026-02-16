import React from "react"

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer">
      
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          {movie.Title}
        </h2>

        <p className="text-gray-600 text-sm">
          {movie.Year}
        </p>
      </div>

    </div>
  )
}

export default MovieCard
