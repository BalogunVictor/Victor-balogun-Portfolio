import {BrowserRouter } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AnimatedPages from "./AnimatedPages/AnimatedPages";
import "./App.scss";


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <AnimatedPages />
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
