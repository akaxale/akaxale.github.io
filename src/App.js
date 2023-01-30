import React, {useState} from 'react';
import './App.css';
import Preloader from './Components/Preloader';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      {
        loading ?
          <Preloader 
            loading={() => setLoading(false)}
          /> 
          :
         <div className='app'>
            <Header />
            <About />
            <Skills />
            <Projects />
          </div>
      }
    </div>
  );
}