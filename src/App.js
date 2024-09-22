import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import  Button  from './components/Button/Button';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Card  from './components/Card/Card'
import Section from './components/Section/Section';
import Songs from './components/Songs/Songs';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar searchData={[]}/>
     </Router>
    <Hero/>
    <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
   <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
   <Songs title="Songs"/>
   

    </div>
  );
}

export default App;
