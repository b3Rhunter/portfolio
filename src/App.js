import './App.css';
import { useEffect, useState } from 'react';
import aboutPic from './images/about.png';
import projectsPic from './images/projects.png';

function App() {
  

  useEffect(() => {
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href");
      window.document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });
  }, []);

  return (
    <div className="App">
      <header id="header" className="App-header">
        <div className="">
          <a href='#header'><div className='image'></div></a>
          <h1>Stanton Sailsbury</h1>
          <hr/>
          <nav>
            <a className='fancy-link' href="#about">About</a>
            <a className='fancy-link' href="#projects">Projects</a>
            <a className='fancy-link' href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="about" className="App-content">
        <div className="container">
          <div className='item'>
            <img src={aboutPic} alt="background" />
          </div>
          <div className='item'>
            <h2>About Me</h2>
            <p>
              Hello! I'm a seasoned web designer with over a decade of experience in the industry.
              Over the years, I've honed my skills in full-stack application development, with a particular
              focus on front-end design and crafting engaging user experiences.
            </p>
          </div>

        </div>
      </section>

      <section id="projects" className="App-content">
        <div className="container two">
          <div className='item'>
            <img src={projectsPic} alt="background" />
          </div>
          <div className='projects'>
            <h2 className='project-title'>Projects</h2>
            <div className='projects-container'>
            <a className='fancy-link' href='https://www.goodmorningnews.club/' target='_blank' rel="noreferrer">Good Morning News</a>
            <a className='fancy-link' href='https://bank-of-ethereum-v4.vercel.app/' target='_blank' rel="noreferrer">Bank of Ethereum</a>
            <a className='fancy-link' href='https://www.subdev.tech/' target='_blank' rel="noreferrer">SubDev</a>
            </div>
            <div className='projects-container'>
            <a className='fancy-link' href='https://ethereum-legends.vercel.app/' target='_blank' rel="noreferrer">Ethereum Legends</a>
            <a className='fancy-link' href='https://pubster-zeta.vercel.app/' target='_blank' rel="noreferrer">Pubster</a>
            <a className='fancy-link' href='https://pubcord-lovat.vercel.app/' target='_blank' rel="noreferrer">Pubcord</a>
            </div>
          </div>

        </div>
      </section>

      <section id="contact" className="App-content">
        <div className="container">
          <div className='item'>
            <img src={aboutPic} alt="background" />
          </div>
          <div className='item'>
            <h2>Contact</h2>
            <input placeholder='name'/>
            <input placeholder='email'/>
            <textarea placeholder='question'/>
            <input className='submit' type='submit' value='Submit'/>
          </div>

        </div>
      </section>


      <footer className="App-footer">
        <h3><p>© 2023 Stanton Sailsbury</p></h3>
      </footer>
    </div>
  );
}

export default App;
