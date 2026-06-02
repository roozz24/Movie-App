import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import Signin from './pages/Signin'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Watchlist" element={<Watchlist />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
