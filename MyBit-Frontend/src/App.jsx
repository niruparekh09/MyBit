import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import View from './components/View';
import Categories from './components/Categories';
import Donation from './components/Donation';
import Add from './components/Add';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users/signup" element={<SignUp />}></Route>
        <Route path="/users/signin" element={<SignIn />}></Route>
        <Route path="/ngo/view" element={<View />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/donation" element={<Donation />}></Route>
        <Route path="/products/add" element={<Add />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
