import { useState } from "react"
import MovieList from "./components/MovieList"
import { searchMovies } from "./services/omdbApi"

function App() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("")

  const handleSearch = async () => {
    const results = await searchMovies(query)
    setMovies(results)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Movie Database App
      </h1>

      {/* Search Bar */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          className="border p-2 rounded w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Movie List */}
      <MovieList movies={movies} />

    </div>
  )
}

export default App
