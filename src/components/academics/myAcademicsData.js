import React from "react";
import { Container } from "react-bootstrap";

import './myAcademics.css';

let MyAcademicsData = ({
        academicsData = null, 
        columnsAca = null, 
        hover=true, 
        striped=true
    }) => {
    const getCaps = (str) => {
        return str.toUpperCase();
    }
    return (
        <Container>
        <div className="tableContainerAcademics">
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
        <br></br>
        </Container>
    )
};

export default MyAcademicsData;