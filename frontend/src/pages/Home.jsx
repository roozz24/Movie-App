import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import auth from "../firebase/Firebase"

function Home({ toggleWatchlist, isInWatchlist }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const user = auth.currentUser;

  console.log(page)

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=3H4ZCi9mhZsFpowmmVhUh1NF1C5NoSPPvH`

    if (search) {
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=3H4ZCi9mhZsFpowmmVhUh1NF1C5NoSPPvH`
    }

    fetch(url, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWMxMjY0NmU2MWVjMzZhYmMwN2E3MTBmZjE2OTM3NiIsIm5iZiI6MTc4MDcyNzY3MS42NTYsInN1YiI6IjZhMjNiZjc3OTY4YzAxMzc5MjgxNzdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z9_KLgKrQ3wdrUDlRCmN-5rAjm1fIRA6TTM_loXhJoc",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.log(err))

      if(user) {
        navigate("/Home")
      }else {
        navigate("/")
      }
  }, [page, search])

  return (
    <div className="pt-16 p-4 bg-black">
      {/* search box */}
      <input type="text"
        placeholder="Search Movies"
        onChange={(e) => setSearch(e.target.value)}
        className="p-1 w-3/4 md:w-1/2 border z-10 rounded-sm mt-2 bg-black opacity-60 text-white fixed top-16 left-1/2 transform -translate-x-1/2" />
      {/* Movie container */}
      <div className="Movie-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 gap-y-6 mt-16">
        {movies.map((movie) => {
          return <MovieCard
            toggleWatchlist={toggleWatchlist}
            isInWatchlist={isInWatchlist}
            key={movie.id}
            movie={movie} />
        })}
      </div>
      {/* Pagination */}
      <div className="flex justify-between mt-5">
        <button className="p-2 bg-white text-black font-bold rounded"
          disabled={page == 1}
          onClick={() => {
            setPage((page) => page - 1)
          }}>Previous</button>
        <button className="p-2 bg-white text-black font-bold rounded"
          onClick={() => {
            setPage((page) => page + 1)
          }}>Next</button>
      </div>
    </div>
  )
}

export default Home