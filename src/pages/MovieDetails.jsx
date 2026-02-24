import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getMovieDetails } from "../services/omdbApi"

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true)
      const data = await getMovieDetails(id)
      setMovie(data)
      setLoading(false)
    }

    fetchMovie()
  }, [id])

  // ✅ Loading Spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="p-6 text-center text-gray-500">
        Movie not found.
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="text-blue-500 mb-6 hover:underline"
      >
        ← Back to Search
      </button>

      {/* Main Card */}
      <div className="bg-white p-6 rounded shadow flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">

        {/* Poster */}
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.Title}
          className="w-full md:w-72 rounded object-cover"
        />

        {/* Details */}
        <div className="flex-1">

          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {movie.Title} ({movie.Year})
          </h1>

          <p className="text-gray-600 mb-3">
            {movie.Genre}
          </p>

          <p className="mb-4 leading-relaxed">
            {movie.Plot}
          </p>

          <p className="mb-2">
            <strong>Actors:</strong> {movie.Actors}
          </p>

          <p className="mb-2">
            <strong>Rating:</strong> ⭐ {movie.imdbRating}
          </p>

          <p className="mb-2">
            <strong>Runtime:</strong> {movie.Runtime}
          </p>

          <p>
            <strong>Released:</strong> {movie.Released}
          </p>

        </div>

      </div>

    </div>
  )
}

export default MovieDetails
