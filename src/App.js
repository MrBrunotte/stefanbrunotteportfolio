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

import AcademicsDataJSON from './components/academicsNew/academicsNew';
import WorkDataJSON from './components/work/workNew';

let App = () => {
  // const columnsWork = [
  //   { field: "company", header: "Company"},
  //   { field: "workDescription", header: "Work"},
  //   { field: "description", header: "Description"},
  //   { field: "tags", header: "Tags"},
  //   { field: "startDate", header: "Start"},
  //   { field: "endDate", header: "End"}
  // ];
  // const columnsAcademics = [
  //   { field: "school", header: "University"},
  //   { field: "course", header: "Course"},
  //   { field: "description", header: "Description"},
  //   { field: "tags", header: "Tags"},
  //   { field: "startDate", header: "Start"},
  //   { field: "endDate", header: "End"}
  // ]

  return (
    <>
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
        minBreakpoint="xs"
        >
      <MyNavbar></MyNavbar>

      <WorkDataJSON></WorkDataJSON>
      <AcademicsDataJSON></AcademicsDataJSON>
      {/* <MyAcademicsData
        academicsData = {academicsData}
        columnsAca = {columnsAcademics}>
      </MyAcademicsData> */}
      {/* <MyWorkData 
        workData = {workData} 
        columnsWork = {columnsWork}>
      </MyWorkData> */}

      <Landingpage></Landingpage>
      <About></About>
      <MyProjects></MyProjects>
      <Contact></Contact>
      </ThemeProvider>
    </>
  );
}

export default App;
