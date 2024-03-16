import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import MovieDetails from './pages/movieDetails'
import Movies from './pages/Movies'
import Tvshow from './pages/Tvshow'
import TvshowDetails from './pages/TvshowDetails'
import Actors from './pages/Actors'
import ActorDetails from './pages/ActorDetails'

function App() {

  return (
    <div className=''>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:movieId' element={<MovieDetails/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/series' element={<Tvshow/>}/>
          <Route path='/tvshow/:tvshowId' element={<TvshowDetails/>}/>
          <Route path='/actors' element={<Actors/>}/>
          <Route path='/actor/:actorId' element={<ActorDetails/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
