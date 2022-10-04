import React from "react";
import { Container } from "react-bootstrap";
import MyWorkData from '../../myWork.json';

let WorkDataJSON = () => {
    return (
        <Container>
        <h1 className="myH1">Work</h1>
        {
            MyWorkData && MyWorkData.map(work => {
                return(
                    <div key={work.id} className="tableContainerAcademics">
                        <table className="table">
                            <h4 className="h4Table">{work.company}</h4>
                            <tbody>
                                <tr className="trBottomBorder">
                                    <td data-label="University">{work.workDescription}</td>
                                    <td data-label="Course">{work.description}</td>
                                    <td data-label="Description">{work.gainedExperience}</td>
                                    <td data-label="Tags">{work.tags}</td>
                                    <td data-label="Start">{work.startDate}</td>
                                    <td data-label="End">{work.endDate}</td>
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

export default WorkDataJSON;