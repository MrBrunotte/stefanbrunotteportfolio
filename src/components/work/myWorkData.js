import React from "react";
import { Container } from "react-bootstrap";

let MyWorkData = ({workData = null, columnsWork = null, hover=true, striped=true}) => {
    const getCaps = (str) => {
        return str.toUpperCase();
    }
    return (
        <Container>
            <h1 className="myH1">my Work</h1>
            <table>
                <thead>
                    <tr>
                        {columnsWork &&
                        columnsWork.map(head => <th>{ getCaps(head.header) }</th>)}
                    </tr>
                </thead>
                <tbody>
                    {workData && 
                    workData.map(row=> (
                    <tr className={`${hover && "hover"} ${striped && "hover"}`}>
                        {columnsWork.map(col => 
                        <td>{ row[col.field] }</td>)} 
                    </tr>
                    ))}
                </tbody>
            </table>
            {workData ? null : <p className="noDataToShow">No data to show</p>}
        </Container>
    )
};

export default MyWorkData;