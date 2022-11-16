import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        'template_omchafd', 
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

  const notify =() => {
    toast.success('Tank you for contacting me, I will get back to you ASAP!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }

    return (
    <>
        <Container className="contactContainer">
            <Row>
                <div>
                    <Col className='container' xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                        <div className='d-flex justify-content-center'>
                            <img className="contactImg" src={jag} alt="Stefan Brunotte"/>
                        </div>
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
                            <Form.Control name="message" as="textarea" rows={5} />
                            <Form.Control onClick={notify} type="submit" value="Click here to send your message" />
                    </Form>
                </Col>
            </Row>
            <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"/>
        </Container>
    </>
    )
};

export default Contact;