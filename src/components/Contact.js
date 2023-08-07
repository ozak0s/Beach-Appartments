import React from "react";
import Title from "./Title";
import { Map } from "./Map";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section">
      <Title title="Contact Us" />
      <div className="contact-content">
        <Map />
        <div className="contact-info">
          <h4>
            You are welcome to contact us for any information regarding vacancy
            or reservations on the links below:{" "}
          </h4>
          <a className="btn-primary" href="tel:6991234567">
            <FaPhone />
            &nbsp;6991234567
          </a>
          <br />
          <br />
          <a className="btn-primary" href="mailto: abc@example.com">
            <FaEnvelope />
            &nbsp;Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
