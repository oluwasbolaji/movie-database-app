import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import { searchMovies } from "../services/omdbApi"

export default function HomePage() {
  const [query, setQuery] = useState("interstellar")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  // ✅ Pagination state
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  // ✅ Favorites state (localStorage)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites")
    return saved ? JSON.parse(saved) : []
  })

  // ✅ Save favorites automatically
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  // ✅ Search handler (supports pagination)
  const handleSearch = async (newPage = 1) => {
    if (!query) return

    setLoading(true)

    const data = await searchMovies(query, newPage)

    setMovies(data.movies)
    setTotalResults(data.total)
    setPage(newPage)

    setLoading(false)
  }

  // Load default movies on first render
  useEffect(() => {
    handleSearch(1)
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Movie Database
      </h1>

      {/* Search Section */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="border p-2 rounded w-full sm:w-auto flex-1"
        />
        <button
          onClick={() => handleSearch(1)}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Search
        </button>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center mt-6">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Movie Grid */}
      {!loading && movies.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No movies found. Try another search.
        </p>
      )}

      {!loading && movies.length > 0 && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-8">
            {page > 1 && (
              <button
                onClick={() => handleSearch(page - 1)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Previous
              </button>
            )}

            {page * 10 < totalResults && (
              <button
                onClick={() => handleSearch(page + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
