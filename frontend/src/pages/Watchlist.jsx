import Genre from "../components/Genre"

function Watchlist() {

  return (
    <div className="pt-16 p-4">
      {/* search box */}
      <input type="text" placeholder="Search Movies" className="p-1 w-3/4 md:w-1/2 border z-10 rounded-sm bg-black
       opacity-60 text-white fixed top-16 left-1/2 transform -translate-x-1/2" />

      <div className="mt-16 flex justify-center">
        <Genre />
      </div>
    </div>
  )
}

export default Watchlist