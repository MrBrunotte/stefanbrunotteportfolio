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
            <h1 className="myH1">my academics</h1>
            <table>
                <thead className="hidden-xxs hidden-xs hidden-sm hidden-md">
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
                        <td className="tdAcademics">{ row[col.field] }</td>)} 
                    </tr>
                    ))}
                </tbody>
            </table>
            {academicsData ? null : <p className="noDataToShow">No data to show</p>}
        </Container>
    )
};

export default MyAcademicsData;