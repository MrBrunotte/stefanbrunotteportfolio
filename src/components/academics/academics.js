import React from "react";
import { Container } from "react-bootstrap";
import MyAcademicData from '../../myAcademics.json';
import '../../myWorkAcademics.css';

let Academics = () => {
    return (
        <Container>
        <h1 className="myH1">academics</h1>
        {
            MyAcademicData && MyAcademicData.map(myAcademic => {
                return(
                    <div key={myAcademic.id} className="tableContainerAcademics">
                        <table className="table">
                            <h4 className="h4Table">{myAcademic.school}</h4>
                            <tbody>
                                <tr className="trBottomBorder">
                                    <td data-label="University">{myAcademic.school}</td>
                                    <td data-label="Course">{myAcademic.course}</td>
                                    <td data-label="Description">{myAcademic.description}</td>
                                    <td data-label="Tags">{myAcademic.tags}</td>
                                    <td data-label="Start">{myAcademic.startDate}</td>
                                    <td data-label="End">{myAcademic.endDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })
        }
        
        </Container>
    )
};

export default Academics;