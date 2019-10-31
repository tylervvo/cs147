import React, { Component } from "react";
import A5_Report from './files/A5_Report.pdf'
import A5_Slides from './files/A5_Slides.pdf'
import readMe from './files/readMe.pdf'
 
class Prototypes extends Component {
  render() {
    return (
      <div>
        <h2>Low Fidelity Prototype</h2>
        <p>Slides: <a href={A5_Slides} target="_blank">Here</a></p>
        <p>Report: <a href={A5_Report} target="_blank">Here</a></p>
        <br/>

        <h2>Medium Fidelity Prototype</h2>
        <p>Slides:</p>
        <p>ReadMe: <a href={readMe} target="_blank">Here</a></p>
        <p>Try out prototype:</p>
        <a href="https://www.figma.com/proto/uJX9175471FblFPqyIPhXP/CS147-Med-Fi-Wireframing?node-id=55%3A2&scaling=scale-down">Driver</a><br></br>
        <a href="https://www.figma.com/proto/uJX9175471FblFPqyIPhXP/CS147-Med-Fi-Wireframing?node-id=55%3A2&scaling=scale-down">Business Owner</a>
        <br/>

        <h2>High Fidelity Prototype</h2>
        <p>Slides:</p>
        <p>Report:</p>
        <p>Try out prototype</p>
      </div>
    );
  }
}
 
export default Prototypes;
