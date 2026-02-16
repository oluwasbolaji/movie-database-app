const API_KEY = "c1eebcc9"

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    )

    const data = await response.json()

    if (data.Response === "True") {
      return data.Search
    } else {
      return []
    }
  } catch (error) {
    console.error("Error fetching movies:", error)
    return []
  }
}
