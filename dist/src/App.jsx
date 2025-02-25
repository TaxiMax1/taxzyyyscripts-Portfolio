import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './sections/Navbar.jsx';
import Footer from './sections/footer.jsx';
import Introducing from './sections/introducing.jsx';
import Experience from './sections/experience.jsx';
import Projects from './sections/projects.jsx';
import Techstack from './sections/techstack.jsx';

import AboutPage from './pages/about.jsx';
import ProjectsPage from './pages/projectspage.jsx';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Introducing />
            <Experience />
            <Projects />
            <Techstack />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
          <AboutPage />
          <Techstack />
          <Footer />
          </>
        } />

        <Route path="/projects" element={
          <>
          <ProjectsPage />
          <Projects />
          <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;