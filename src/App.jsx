import MovieCard from "./components/MovieCard"

function App() {
  const sampleMovie = {
    Title: "Inception",
    Year: "2010",
    Poster: "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_.jpg"
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <MovieCard movie={sampleMovie} />
    </div>
  )
}

export default App
