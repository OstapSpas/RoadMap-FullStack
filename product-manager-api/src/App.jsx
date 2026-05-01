import './App.css'
import { Link, Routes, Route } from "react-router-dom";

import ProductManagerApi from './pages/ProductManagerApi'

function App() {
  return (
    <>
      <nav>
        <Link to="/product-manager-api">Product Manager</Link>
      </nav>

      <Routes>
        <Route path="/product-manager-api" element={<ProductManagerApi />} />
      </Routes>
    </>
  )
}

export default App