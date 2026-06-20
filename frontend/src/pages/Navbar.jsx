import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import auth from '../firebase/Firebase';

function Navbar() {

  const navigate = useNavigate();
  const user = auth.currentUser;

  const logout = () => {
    signOut(auth).then(() => {
      navigate("/")
    })
  }

  return (
    <nav className="bg-yellow-600 text-white p-4 flex justify-between items-center z-10 fixed w-full top-0">
      <p onClick={() => { navigate("/Home") }} className="font-bold text-lg cursor-pointer">Moviezapp</p>
      <div className="flex gap-4">
        <p onClick={() => { navigate("/Watchlist") }} className="font-bold text-lg cursor-pointer">Watchlist</p>
        <div>
          {user ?
            <p onClick={logout} className="font-bold text-lg cursor-pointer">Log out</p> :
            <p className="font-bold text-lg cursor-pointer">Sign in</p>
          }
        </div>

      </div>
    </nav>
  )
}

export default Navbar

