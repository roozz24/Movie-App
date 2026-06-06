import MovieCard from "../components/MovieCard"

function Home() {

  const movies = [
    {
      poster: "https://cdng.europosters.eu/pod_public/1300/263043.jpg",
      name: "Django Unchained",
      release_date: "25-12-2012"
    },
    {
      poster: "https://cdng.europosters.eu/pod_public/1300/263043.jpg",
      name: "Django Unchained",
      release_date: "25-12-2012"
    },
    {
      poster: "https://cdng.europosters.eu/pod_public/1300/263043.jpg",
      name: "Django Unchained",
      release_date: "25-12-2012"
    },
    {
      poster: "https://cdng.europosters.eu/pod_public/1300/263043.jpg",
      name: "Django Unchained",
      release_date: "25-12-2012"
    },
    {
      poster: "https://cdng.europosters.eu/pod_public/1300/263043.jpg",
      name: "Django Unchained",
      release_date: "25-12-2012"
    },
    {
      poster: "https://cdng.europosters.eu/pod_public/1300/263043.jpg",
      name: "Django Unchained",
      release_date: "25-12-2012"
    },
    {
      poster: "https://cdng.europosters.eu/pod_public/1300/263043.jpg",
      name: "Django Unchained",
      release_date: "25-12-2012"
    },
    {
      poster: "https://cdng.europosters.eu/pod_public/1300/263043.jpg",
      name: "Django Unchained",
      release_date: "25-12-2012"
    },
    {
      poster: "https://cdng.europosters.eu/pod_public/1300/263043.jpg",
      name: "Django Unchained",
      release_date: "25-12-2012"
    },
    {
      poster: "https://cdng.europosters.eu/pod_public/1300/263043.jpg",
      name: "Django Unchained",
      release_date: "25-12-2012"
    },
  ]

  return (
    <div className="pt-16 p-4">
      {/* search box */}
      <input type="text" placeholder="Search Movies" className="p-1 w-3/4 md:w-1/2 border z-10 rounded-sm bg-black opacity-60 text-white fixed top-16 left-1/2 transform -translate-x-1/2" />
      {/* Movie container */}
      <div className="Movie-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {movies.map(movie => {
          return <MovieCard key={movie.id} movie={movie} />
        })};
      </div>
      {/* Pagination */}
      <div className="flex justify-between mt-5">
        <button className="p-2 bg-red-800 text-white font-bold rounded">Previous</button>
        <button className="p-2 bg-red-800 text-white font-bold rounded">Next</button>
      </div>
    </div>
  )
}

export default Home