import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBox from './page/Search_image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './page/Account';
import './css/style.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="/profile/:id" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;