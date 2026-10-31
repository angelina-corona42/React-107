import { useContext } from "react";
import { Link } from "react-router";
import "./About.css";

import GlobalContext from "../state/globalContext";

function About() {
  const userInformation = useContext(GlobalContext).user;

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Us</h1>
        <p> My name is {userInformation.name}</p>
        <p> I am in Cohort {userInformation.id}</p>
        <p>
          We believe shopping should be simple, enjoyable, and easy to explore.
          Our goal is to provide a clean and welcoming experience for everyone.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Story</h2>

          <p>
            Our store was created to bring together products that are useful,
            stylish, and easy to discover.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>

          <p>
            Our mission is to create a simple shopping experience while
            providing products that customers can enjoy.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Values</h2>

          <p>
            We value quality, simplicity, and creating a positive experience for
            our customers.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
