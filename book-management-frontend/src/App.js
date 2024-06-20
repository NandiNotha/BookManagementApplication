//import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
//import React, {useState} from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
//import Home from './components/Home';



const App = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add Book</Link>
        </nav>
        <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<BookForm />} />
            <Route path="/edit/:id" element={<BookForm />} />
        </Routes>
    </div>
);
};

export default App;
