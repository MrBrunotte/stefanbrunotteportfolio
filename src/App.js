import React from 'react';
import { 
  Route, 
  Routes } from 'react-router-dom';
import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import MyNavbar from './components/navbar/myNavbar';
import Landingpage from './components/landingpage/landingpage';
import About  from './components/about/about';
import MyProjects from './components/myProjects/myProjects';
import Work from './components/work/work';
import Academics from './components/academics/academics';
import Contact from './components/contact/contact';
import Resume from './components/resume/resume';

let App = () => {

  return (
    <>
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
        minBreakpoint="xs"
        >

    <MyNavbar></MyNavbar>

    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<MyProjects />} />
      <Route path="/work" element={<Work />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>

      </ThemeProvider>
    </>
  );
}

export default App;
