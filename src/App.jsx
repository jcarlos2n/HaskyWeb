
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './containers/Homer'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
