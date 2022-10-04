import React from "react";
import { Container } from "react-bootstrap";

import './myAcademics.css';

let MyAcademicsData = ({
        academicsData = null, 
        columnsAca = null, 
        hover=true, 
        striped=true
    }) => {
    
    return (
        <Container>
        {/* <div className="tableContainerAcademics">
            <h1 className="h1Academics">my academics</h1>
            <table className="tableAcademics">
                <thead className="tableHeader">
                    <tr>
                        {columnsAca &&
                        columnsAca.map(head => <th>{ getCaps(head.header) }</th>)}
                    </tr>
                </thead>
                <tbody>
                    {academicsData && 
                    academicsData.map(row=> (
                    <tr className={`${hover && "hover"} ${striped && "hover"}`}>
                        {columnsAca.map(col => 
                        <td className="tdAcademics" data-label>{ row[col.field] }</td>)} 
                    </tr>
                    ))}
                </tbody>
            </table>
            {academicsData ? null : <p className="noDataToShow">No data to show</p>}
        </div>
        <br></br>
        <br></br>
        <br></br> */}
        <div className="tableContainerAcademics">
            <h1 className="h1Academics">my academics</h1>
            <table className="table">
            <thead className="tableHeader">
                <tr>
                    <th>University</th>
                    <th>Course</th>
                    <th>Description</th>
                    <th>Tags</th>
                    <th>Start</th>
                    <th>End</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="University">Lexicon</td>
                    <td data-label="Course">C# ASP .NET mvc</td>
                    <td data-label="Description">C# ASP .NET mvc</td>
                    <td data-label="Tags">C# ASP .NET mvc</td>
                    <td data-label="Start">C# ASP .NET mvc</td>
                    <td data-label="End">C# ASP .NET mvc</td>
                </tr>
            </tbody>

            </table>
            {academicsData ? null : <p className="noDataToShow">No data to show</p>}
        </div>
        

        </Container>
    )
};

export default MyAcademicsData;