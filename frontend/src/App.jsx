import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Customer from './pages/Customer';
import Provider from './pages/Provider';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/provider" element={<Provider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
