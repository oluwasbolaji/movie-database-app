import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import { searchMovies } from "../services/omdbApi"

export default function HomePage() {
  const [query, setQuery] = useState("interstellar")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!query) return
    setLoading(true)
    const results = await searchMovies(query)
    setMovies(results)
    setLoading(false)
  }

  useEffect(() => {
    handleSearch()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Movie Database</h1>

      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="border p-2 rounded w-full sm:w-auto flex-1"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : movies.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No movies found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}
