import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Signin from './pages/Signin';

function App() {

  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("watchlist");
    return saved ? JSON.parse(saved) : [];
  })

  const toggleWatchlist = (movie, watchlist) => {
    setWatchlist((prev) => {
      const alreadyAdded = prev.some((m) => m.id === movie.id)
      const updated = alreadyAdded ? prev.filter((m) => m.id !== movie.id) : [...prev, movie];

      localStorage.setItem("watchlist", JSON.stringify(updated));

      return updated;
    });
  };

  const isInWatchlist = (movieId) => watchlist.some((m) => m.id === movieId)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home
            toggleWatchlist={toggleWatchlist}
            isInWatchlist={isInWatchlist}
          />} />
          <Route path="/Watchlist" element={<Watchlist watchlist={watchlist} toggleWatchlist={toggleWatchlist} />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
