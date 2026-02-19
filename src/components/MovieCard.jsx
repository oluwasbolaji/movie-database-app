import { useNavigate } from "react-router-dom"

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
    >

      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-72 object-cover"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x450"
        }}
      />

      <div className="p-4">
        <h2 className="font-semibold">{movie.Title}</h2>
        <p className="text-gray-600">{movie.Year}</p>
      </div>

    </div>
  )
}

export default MovieCard
