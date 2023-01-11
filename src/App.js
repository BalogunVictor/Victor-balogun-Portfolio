import {BrowserRouter } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AnimatedPages from "./AnimatedPages/AnimatedPages";
import "./App.scss";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="main">
        <Header />
        <AnimatedPages />
        </div>
        <div className="Footer">
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
