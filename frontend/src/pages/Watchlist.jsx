import Genre from "../components/Genre"
import { useEffect, useState } from "react"
import WatchlistMovieCard from "../components/WatchlistMovieCard"

function Watchlist({ watchlist, toggleWatchlist, isInWatchlist }) {

  const movieList = watchlist
  const [search, setSearch] = useState("")
  const filteredMovies = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen pt-16 p-4 bg-black">
      {/* search box */}
      <input type="text" placeholder="Search Movies" className="p-1 w-3/4 md:w-1/2 border z-10 rounded-sm bg-black
       opacity-60 text-white fixed top-16 left-1/2 transform -translate-x-1/2"
        type="text"
        placeholder="Search movies"
        onChange={(e) => setSearch(e.target.value)} />

      <div className="Movie-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 gap-y-6 mt-16">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <WatchlistMovieCard
              toggleWatchlist={toggleWatchlist}
              isInWatchlist={isInWatchlist}
              key={movie.id}
              movie={movie} />
          )))
          :
          (
            <p className="text-white text-xl col-span-full text-center">
              Movie not found!
            </p>
          )
        }
      </div>
    </div>
  )
}

export default Watchlist
