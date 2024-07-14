/* eslint-disable */
import './App.css';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import About from './components/About';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Books />} />
    <Route path='categories' element={<Categories />} />
    <Route path='about' element={<About />} />
    </Route>
    </Routes>
    </>
  );
}

export default App;
