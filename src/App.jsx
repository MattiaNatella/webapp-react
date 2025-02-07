import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import FilmDetail from './pages/FilmDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path='/' Component={HomePage} />
          <Route path='/film-detail' Component={FilmDetail} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App