import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import FilmDetail from './pages/FilmDetail'
import FilmForm from './pages/FilmForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { GlobalProvider } from './context/GlobalContext'
import notFound from './pages/notFound'

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
            <Route path='/film-detail/:id' Component={FilmDetail} />
            <Route path='/new-film' Component={FilmForm} />
            <Route path='*' Component={notFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App