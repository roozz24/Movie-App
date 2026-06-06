import { FaHeart, FaRegHeart } from "react-icons/fa"

function MovieCard({ movie }) {

    return (
        <div className="bg-white pb-2 relative text-black rounded-lg max-w-[220px]">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="h-80 w-full object-cover rounded-sm" />
            <h3 className="text-md font-bold mt-4 ml-2">{movie.title}</h3>
            <p className="text-sm ml-2">{movie.release_date}</p>
            <button className="text-yellow-600 absolute top-2 right-2 text-lg">{1 === 1 ? <FaHeart /> : <FaRegHeart />}</button>
        </div>
    )
}

export default MovieCard

