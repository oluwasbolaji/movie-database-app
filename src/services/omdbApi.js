const API_KEY = "c1eebcc9"

export const searchMovies = async (query) => {
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    const data = await res.json()
    if (data.Response === "False") return []
    return data.Search || []
  } catch (err) {
    console.error("Error fetching movies:", err)
    return []
  }
}

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
    const data = await res.json()
    if (data.Response === "False") return null
    return data
  } catch (err) {
    console.error("Error fetching movie details:", err)
    return null
  }
}
