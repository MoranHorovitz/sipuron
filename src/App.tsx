import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import { Navbar } from './components/Navbar'
import { BookPreview } from './pages/BookPreview';
import { BookCreate } from './pages/BookCreate';

function App() {
  
  return (
    <Router>
      <div className="relative font-nunito bg-[url('./assets/bg.svg')]">
        <Navbar />
        <Routes>
          <Route path="/" Component={BookCreate} />
          <Route path="/book/:id" element={<BookPreview />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
