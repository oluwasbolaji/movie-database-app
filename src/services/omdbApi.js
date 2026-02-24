const API_KEY = "c1eebcc9"

export const searchMovies = async (query, page = 1) => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`
    )

    const data = await res.json()

    if (data.Response === "False") {
      return { movies: [], total: 0 }
    }

    return {
      movies: data.Search || [],
      total: parseInt(data.totalResults) || 0,
    }

  } catch (err) {
    console.error("Error fetching movies:", err)
    return { movies: [], total: 0 }
  }
}

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
    )

    const data = await res.json()

    if (data.Response === "False") return null

    return data

  } catch (err) {
    console.error("Error fetching movie details:", err)
    return null
  }
}
