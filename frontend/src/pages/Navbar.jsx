import { Link } from 'react-router-dom'

function Navbar() {

  const {count, setCount} = 0 

  return (
    <div className="bg-red-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">Moviezapp</Link>
      <div className="flex gap-4">
        <Link to="/Watchlist" className="font-bold text-lg">Watchlist{count}</Link>
        <Link to="/Signin" className="font-bold text-lg">Sign in</Link>
      </div>
    </div>
  )
}

export default Navbar