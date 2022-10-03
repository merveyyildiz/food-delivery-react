import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo">
              <img src={logo} alt="logo" className="text-start" />
              <h5>Tasty Trast</h5>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ab distinctio laboriosam illum, aut eum?</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className="delivery">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:amp - 11pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off Day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className="delivery">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Location: Kocaeli/Turkiye</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 0262 123 45 67</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: merveyildizzz41@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subscribe our Newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg="6" md="6" className="mt-2">
            <p className="copyright">Copytight - 2022, website made by Merve Yıldız. All Right Reserved.</p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex  gap-4 align-items-center justify-content-end">
              <p className='mb-0'>Follow:</p>
              <span> <Link to=""><i className="ri-linkedin-line"></i></Link></span>
              <span> <Link to=""><i className="ri-github-line"></i></Link></span>
            </div>  
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer