import React from "react";
import Title from "./Title";
import apsview from "../images/outsideview.jpg";

export default function About() {
  return (
    <section className="about-section">
      <Title title="About" />
      <div className="about-content">
        <div className="outViewContainer">
          <img src={apsview} alt="apsview" />
        </div>
        <p>
          Amet et eu magna tempor in id sunt aliqua fugiat aliqua enim. Amet
          cillum amet proident tempor officia nisi exercitation nostrud. Elit
          mollit et veniam qui non non ea non. Consectetur cillum sit id
          proident incididunt non esse mollit fugiat ad eiusmod dolore occaecat.
          Officia sint esse proident est esse ex esse magna ullamco quis irure
          exercitation in. Amet et eu magna tempor in id sunt aliqua fugiat
          aliqua enim. Amet cillum amet proident tempor officia nisi
          exercitation nostrud. Elit mollit et veniam qui non non ea non.
          Consectetur cillum sit id proident incididunt non esse mollit fugiat
          ad eiusmod dolore occaecat. Officia sint esse proident est esse ex
          esse magna ullamco quis irure exercitation in.
        </p>
      </div>
    </section>
  );
}
