import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const API_KEY = "c1eebcc9"

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      )

      const data = await response.json()
      setMovie(data)
    }

    fetchMovieDetails()
  }, [id])

  if (!movie) {
    return <div className="p-6">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <button
        onClick={() => navigate("/")}
        className="text-blue-500 mb-4"
      >
        ← Back to Search
      </button>

      <div className="bg-white p-6 rounded shadow flex flex-col md:flex-row gap-6">

        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full md:w-72 rounded"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {movie.Title} ({movie.Year})
          </h1>

          <p className="text-gray-600 mt-2">
            {movie.Genre}
          </p>

          <p className="mt-4">
            {movie.Plot}
          </p>

          <p className="mt-2">
            <strong>Actors:</strong> {movie.Actors}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {movie.imdbRating}
          </p>

          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>

        </div>

      </div>

    </div>
  )
}

export default MovieDetails
