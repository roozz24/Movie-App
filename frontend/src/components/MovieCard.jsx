import { FaHeart, FaRegHeart } from "react-icons/fa"

function MovieCard( {movie} ) {

    return(
        <div className="bg-red-800 p-4 relative text-white rounded-lg px-8">
            <img src={movie.poster} alt="{movie.name}" className="w-full object-contain h-80 rounded-sm" />
            <h3 className="text-lg font-bold">{movie.name}</h3>
            <p>{movie.release_date}</p>
            <button className=" absolute top-2 right-2 text-lg">{1===1 ? <FaHeart /> : <FaRegHeart />}</button>
        </div>
    )
}

export default MovieCard