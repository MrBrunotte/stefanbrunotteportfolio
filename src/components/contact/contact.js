import React, { useRef } from 'react';
import Div100vh from 'react-div-100vh';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form } from "react-bootstrap";
import jag from '../../images/jag.png';
import './contact.css'

let Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_y5eq5oy', 
        'template_0qo8zfi', 
        form.current, 
        'pOyTf-kcfEiUc9xH6'
    )
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
    <>
    <Div100vh>
        <Container className="contactContainer">
            <Row>
                <div>
                    <Col className='container' xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                    <div className='d-flex justify-content-center'>
                        <img className="contactImg" src={jag} alt="Stefan Brunotte"/>
                    </div>
                    </Col>
                    <Col className='container' xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                    </Col>
                </div>
            </Row>
            <Row>
                <Col className='container' xs={12}>
                    <h1 className='myH1'>contact me</h1>
                    <Form className='mx-auto' ref={form} onSubmit={sendEmail}>
                        <Form.Label> Your Name</Form.Label>
                            <Form.Control type="text" name="user_name" />
                        <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" name="user_email" />
                        <Form.Label>Your message</Form.Label>
                        <Form.Text name="message" />
                            <Form.Control as="textarea" aria-label="With textarea" />
                            <Form.Control className='g-recaptcha' type="submit"  data-sitekey="6LcKMF0iAAAAAJVqDKed5juxDc2qWaLwtARvHx5C" value="Click here to send your message" />
                    </Form>
                </Col>
            </Row>
        </Container>
    </Div100vh>
    <Container className="contactContainer">
        
    </Container>
    </>
    )
};

export default Contact;