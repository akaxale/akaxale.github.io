import React, {useState, useEffect} from 'react';
import './App.css';

import Preloader from './Components/Preloader'
import Header from './Components/Header'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

export default function App() {
  const [loading, setLoading] = useState(true)

/*
  const scrolling = setInterval(() => {      
    if (loading) {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      window.scrollTo(0,0)
    }
  }, 1);

  if (!loading) {
    clearInterval(scrolling)
  }
*/
/*
document.querySelectorAll('a').forEach(link => {
  link.addEventListener("click", () => {
      document.getElementById('active').checked = false;
  })
})
*/

useEffect(() => {
}, [])

  return (
    <div>
      {/*
        loading ?
          <Preloader 
            loading={() => setLoading(false)}
          /> 
          :
          
          <Projects />
          */
         <div className='app'>
            <Header />
            <About />
            <Skills />
          </div>
      }
    </div>
  );
}