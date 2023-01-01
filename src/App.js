import  Homepage  from '././Homepage/Homepage'
import AboutMe from './About-Me/AboutMe';
import Projects from './Projects/Projects';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from './Resume/Resume';
import Header from './Header/Header';
import Footer from './Footer/Footer'


function App() {
  return (
    <Router>
    
      <Header />
        <Routes>
          <Route path="/" exact element={  <Homepage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
