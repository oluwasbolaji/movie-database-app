import { useState } from "react"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    onSearch(query)
  }

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Search movies..."
        className="flex-1 p-2 border rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
