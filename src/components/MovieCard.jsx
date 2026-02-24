import { useNavigate } from "react-router-dom"

const MovieCard = ({ movie, favorites = [], setFavorites }) => {
  const navigate = useNavigate()

  const isFavorite = favorites.some(
    (fav) => fav.imdbID === movie.imdbID
  )

  const toggleFavorite = (e) => {
    e.stopPropagation() // 🚀 Prevent navigation when clicking button

    if (isFavorite) {
      setFavorites(
        favorites.filter((fav) => fav.imdbID !== movie.imdbID)
      )
    } else {
      setFavorites([...favorites, movie])
    }
  }

  return (
    <div
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold">{movie.Title}</h2>
        <p className="text-gray-600">{movie.Year}</p>

        {/* Favorites Button */}
        <button
          onClick={toggleFavorite}
          className={`mt-3 w-full py-1 rounded text-sm transition ${
            isFavorite
              ? "bg-red-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {isFavorite ? "Remove Favorite" : "Add to Favorites"}
        </button>
      </div>
    </div>
  )
}

export default MovieCard
