import {BrowserRouter } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AnimatedPages from "./AnimatedPages/AnimatedPages";


function App() {

  return (

    <BrowserRouter>
      <Header />
        <AnimatedPages />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
