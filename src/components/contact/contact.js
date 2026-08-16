// src/components/contact/contact.js

import React, { useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_y5eq5oy",
        "template_omchafd",
        form.current,
        "pOyTf-kcfEiUc9xH6",
      );

      toast.success(
        "Thank you for contacting me. I will get back to you as soon as possible.",
        {
          position: "bottom-center",
          autoClose: 3000,
          theme: "dark",
        },
      );

      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      console.error("EmailJS status:", error?.status);
      console.error("EmailJS text:", error?.text);

      toast.error(`EmailJS error: ${error?.text || "Unknown error"}`, {
        position: "bottom-center",
        autoClose: 4000,
        theme: "dark",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contactPage">
      <Container className="contactPageContainer">
        {/* HERO */}
        <section className="contactHero">
          <p className="contactEyebrow">CONTACT</p>

          <h1>Let&apos;s connect</h1>

          <p className="contactLead">
            I&apos;m open to conversations about Application Support, Technical
            Support, System Support and Application Specialist opportunities,
            particularly roles where troubleshooting, system understanding and
            collaboration are important.
          </p>
        </section>

        <div className="contactSeparator" />

        {/* CONTACT AREA */}
        <section className="contactSection">
          <Row className="g-4">
            {/* LEFT */}
            <Col lg={5}>
              <div className="contactInfoCard">
                <p className="contactSectionLabel">GET IN TOUCH</p>

                <h2>Have a role or project in mind?</h2>

                <p className="contactInfoText">
                  The easiest way to reach me is through the form, LinkedIn or
                  email. I&apos;m based in Stockholm, Sweden.
                </p>

                <div className="contactLinks">
                  <a
                    href="mailto:stefanbrunotte@gmail.com"
                    className="contactLink"
                  >
                    <FaEnvelope />
                    <span>
                      <strong>Email</strong>
                      <small>stefanbrunotte@gmail.com</small>
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/stefanbrunotte/"
                    target="_blank"
                    rel="noreferrer"
                    className="contactLink"
                  >
                    <FaLinkedin />
                    <span>
                      <strong>LinkedIn</strong>
                      <small>Stefan Brunotte</small>
                    </span>
                  </a>

                  <a
                    href="https://github.com/MrBrunotte"
                    target="_blank"
                    rel="noreferrer"
                    className="contactLink"
                  >
                    <FaGithub />
                    <span>
                      <strong>GitHub</strong>
                      <small>MrBrunotte</small>
                    </span>
                  </a>
                </div>

                <div className="contactAvailability">
                  <p className="contactMiniLabel">CURRENT FOCUS</p>

                  <p>
                    Application Support · Technical Support · System Support ·
                    Application Specialist
                  </p>
                </div>
              </div>
            </Col>

            {/* RIGHT */}
            <Col lg={7}>
              <div className="contactFormCard">
                <p className="contactSectionLabel">SEND A MESSAGE</p>

                <h2>Contact me directly</h2>

                <Form ref={form} onSubmit={sendEmail} className="contactForm">
                  <div className="contactField">
                    <Form.Label htmlFor="contact-name">Your name</Form.Label>

                    <Form.Control
                      id="contact-name"
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="contactField">
                    <Form.Label htmlFor="contact-email">Your email</Form.Label>

                    <Form.Control
                      id="contact-email"
                      type="email"
                      name="user_email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  <div className="contactField">
                    <Form.Label htmlFor="contact-message">
                      Your message
                    </Form.Label>

                    <Form.Control
                      id="contact-message"
                      name="message"
                      as="textarea"
                      rows={7}
                      placeholder="Write your message here..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="contactSubmitButton"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send message"}
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </section>

        <div className="contactSeparator" />

        {/* CLOSING */}
        <section className="contactClosing">
          <p className="contactSectionLabel">PROFESSIONAL PROFILE</p>

          <h2>Technical support with broader system understanding</h2>

          <p>
            My background combines hands-on IT support, application
            troubleshooting, Microsoft technologies, development knowledge and
            customer-facing experience.
          </p>
        </section>
      </Container>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}
