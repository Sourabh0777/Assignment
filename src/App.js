import React from 'react';
import './App.css';
import Myfav from './components/Myfav/Myfav';
import SearchField from './components/SearchField/SearchField';
import ErrorPage from './Routes/ErrorPage';
import ViewDetails from './components/ViewDetails/ViewDetails';
import SearchList from './components/SearchList/SearchList';
// Router

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="app">

      <Routes>
        <Route exact path="/" element={<SearchField />} />
        <Route path="/SearchList" element={<SearchList />} />
        <Route path="/Myfav" element={<Myfav />} />
        <Route exact path="/ViewDetails" element={<ViewDetails />} />
        <Route element={ErrorPage} />
      </Routes>
    </div>

  );
}

export default App;
