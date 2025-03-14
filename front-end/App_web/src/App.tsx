import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// ...importa otros componentes según sea necesario...

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define otras rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default App;