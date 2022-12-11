
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './containers/Home'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
