const API_KEY = "c1eebcc9"

export const searchMovies = async (query) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
  )

  const data = await response.json()

  return data.Search || []
}

export const getMovieDetails = async (id) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
  )

  const data = await response.json()

  return data
}
