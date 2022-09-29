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

let App = () => {
  const columnsWork = [
    { field: "company", header: "Company"},
    { field: "workDescription", header: "Work"},
    { field: "description", header: "Description"},
    { field: "tags", header: "Tags"},
    { field: "startDate", header: "Start date"},
    { field: "endDate", header: "End Date"}
  ];
  const columnsAcademics = [
    { field: "school", header: "University"},
    { field: "course", header: "Course"},
    { field: "description", header: "Description"},
    { field: "tags", header: "Tags"},
    { field: "startDate", header: "Start date"},
    { field: "endDate", header: "End Date"}
  ]

  return (
    <>
      <MyNavbar></MyNavbar>

      <About></About>
      <Landingpage></Landingpage>
      <MyWorkData 
        workData = {workData} 
        columnsWork = {columnsWork}>
      </MyWorkData>
      <MyAcademicsData
        academicsData = {academicsData}
        columnsAca = {columnsAcademics}>
      </MyAcademicsData>
      <Contact></Contact>
    </>
  );
}

export default App;
