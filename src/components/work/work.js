import React from "react";
import { Container } from "react-bootstrap";
import MyWorkData from '../../myWork.json';
import '../../myWorkAcademics.css';

let Work = () => {
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
                                    <td data-label="Company" className="myUppercase">{work.company}</td>
                                    <td data-label="Title" className="myUppercase">{work.workDescription}</td>
                                    <td data-label="Description">{work.description}</td>
                                    <td data-label="Experience">{work.gainedExperience}</td>
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

export default Work;