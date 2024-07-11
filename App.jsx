import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Features from './components/Features';
import Todo from './components/Todo';
import Stopwatch from './components/Stopwatch';
import Bg from './components/Bg';
import Calculator from './components/Calculater';
import WordCount from './components/WordCounter';
import About from './components/About';
import Contectus from './components/Contectus';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import Api from './components/Api';
import Nav from './Nav';
import Footer from './Footer';
// import Home from './Home';
// import Features from './Features';
// import About from './About';
// import Contectus from './Contectus';
// import PageNotfound from './PageNotfound';
// import Todo from './Todo'
// import Stopwatch from './Stopwatch';
// import Bgchanger from './Bgchanger';
// import Calculater from './Calculater';
// import Dynamic from './Dynamic';
// import Person from './Person';
// import Api from './Api';
// import WordCount from './Word-Count';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/features/todolist" element={<Todo/>} />
        <Route path="/features/stopwatch" element={<Stopwatch/>} />
        <Route path="/features/bgchanger" element={<Bg/>} />
        <Route path="/features/calculater" element={<Calculator />} />
        <Route path="/features/word" element={<WordCount/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contectus />} />
        <Route path="/dynamic" element={<Login/>} /> 
        <Route path="*" element={<PageNotFound />} />
        <Route path="/api" element={<Api />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
