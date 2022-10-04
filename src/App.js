import React from 'react';
import './App.css';
import MyNavbar from './components/navbar/myNavbar';
import About from './components/about/about';
import Landingpage from './components/landingpage/landingpage';
import Contact from './components/contact/contact';
import MyWorkData from './components/work/myWorkData';
import { workData } from './components/work/workData';
import MyAcademicsData from './components/academics/myAcademicsData';
import { academicsData } from './components/academics/academicsData';
import MyProjects from './components/myProjects/myProjects';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

let App = () => {
  const columnsWork = [
    { field: "company", header: "Company"},
    { field: "workDescription", header: "Work"},
    { field: "description", header: "Description"},
    { field: "tags", header: "Tags"},
    { field: "startDate", header: "Start"},
    { field: "endDate", header: "End"}
  ];
  const columnsAcademics = [
    { field: "school", header: "University"},
    { field: "course", header: "Course"},
    { field: "description", header: "Description"},
    { field: "tags", header: "Tags"},
    { field: "startDate", header: "Start"},
    { field: "endDate", header: "End"}
  ]

  return (
    <>
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
        minBreakpoint="xs"
        >
      <MyNavbar></MyNavbar>

      <Landingpage></Landingpage>
      <About></About>
      <MyProjects></MyProjects>
      <MyWorkData 
        workData = {workData} 
        columnsWork = {columnsWork}>
      </MyWorkData>
      <MyAcademicsData
        academicsData = {academicsData}
        columnsAca = {columnsAcademics}>
      </MyAcademicsData>
      <Contact></Contact>
      </ThemeProvider>
    </>
  );
}

export default App;
