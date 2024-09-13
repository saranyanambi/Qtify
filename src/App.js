import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import  Button  from './components/Button/Button';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Card  from './components/Card/Card'
import Section from './components/Section/Section';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
    
    <Router>
      
    <Navbar searchData={[]}/>
   
   
    </Router>
    <Hero/>
    {/* <Hero/> */}
    <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
   <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
   
   

    </div>
  );
}

export default App;
