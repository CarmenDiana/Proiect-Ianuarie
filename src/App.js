import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home} from './pagina principala/pagina principala'
import {NotFound} from './not-found'
import "./SCSS files/main.scss"
import {Header} from './pagina principala/Home components/Header'
import {Footer} from './pagina principala/Home components/Footer'


function App() {

    return (
      <div className="App">
        <BrowserRouter>
            <Header />
                  <Routes>
                      <Route path={'/'} element={<Home />} />
                      <Route path={'*'} element={<NotFound />} />
                  </Routes>
            <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App;