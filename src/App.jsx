import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Auth/Login.jsx';
import SignUp from './components/Auth/SignUp.jsx';
import SidebarNav from './components/Dashboard/SidebarNav.jsx';
import Card from './components/Dashboard/Card/Card.jsx';
import Buku from './pages/Buku/Buku.jsx';

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login/> }></Route>
        <Route path="/signup" element={ <SignUp/> }></Route>
        <Route path="/Dashboard" element={ <Buku/> }></Route>
      </Routes>
    </BrowserRouter>
  )          

}

export default App
