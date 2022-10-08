import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainProvider } from './MainContext'
import Landing from './components/Landing'
import Gallery from './components/Gallery'
import CreateChalkboard from './components/CreateChalkboard'

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/create" element={<CreateChalkboard />} />
        </Routes>
      </BrowserRouter>
    </MainProvider>
  )
}

export default App
