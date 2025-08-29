import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: '20px 0 60px' }}>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/products" element={<div>Products</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/stockists" element={<div>Stockists</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </main>
    </>
  )
}
export default App
