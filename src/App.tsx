// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: '20px 0 60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* other routes... */}
        </Routes>
      </main>
    <Footer />  
    </>
  )
}
