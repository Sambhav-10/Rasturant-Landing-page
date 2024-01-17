
import './App.css';
import Event from './components/events/Event';
import Fresh from './components/fressh/Fresh';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Product from './components/products/Product';

import Story from './components/story/Story';
import Testomonial from './components/testomonials/Testomonial';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Story/>
    <Fresh/>
    <Testomonial/>
    <Event/>
    <Product/>

    </>
  );
}

export default App;
