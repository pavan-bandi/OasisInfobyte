import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">pavan reddy bandi </span>
            from <span className="purple"> Anantapur, India.</span>
            <br />I am  pursuing B.Tech in computer science and Engineering in JNTUA college of Engineering
            Anantapur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight />  {" "}   Travelling
            </li>
           
            <li className="about-activity">
              <ImPointRight />  {" "}   Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />  {" "}   Reading Novels
            </li>
           
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">pawan@bandi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
