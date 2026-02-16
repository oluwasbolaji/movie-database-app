import MovieList from "./components/MovieList"

function App() {
  const sampleMovies = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    },
    {
      imdbID: "tt0816692",
      Title: "Interstellar",
      Year: "2014",
      Poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      imdbID: "tt0468569",
      Title: "The Dark Knight",
      Year: "2008",
      Poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Movie Database</h1>

      <MovieList movies={sampleMovies} />
    </div>
  )
}

export default App
