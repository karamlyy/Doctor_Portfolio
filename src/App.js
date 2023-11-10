import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header'
import Services from './components/Services';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <AboutMe/>
      <Services/>
      <Education />
      <Contact/>
    </div>
  );
}

export default App;
