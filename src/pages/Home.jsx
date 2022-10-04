import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import Category from "../components/UI/category/Category";
import "../styles/home.scss";

const Home = () => {
    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" className="d-flex justify-content-center align-items-center flex-column ">
                            <div className="hero__content">
                                <h5 className="mb-3">Easy way to make an order</h5>
                                <h1 className="mb-4 hero__title"><span>Hungry?</span> just wait <br /> food at<span> your door</span></h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sed quae vero reiciendis assumenda. Alias?</p>

                                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                                    <button className="order__btn d-flex aling-items-center justify-content-between">
                                        Order now <i className="ri-arrow-right-s-line"></i>
                                    </button>

                                    <button className="all__foods">
                                        <Link to="/foods">See all foods</Link>
                                    </button>
                                </div>

                                <div className="hero__service mt-4 d-flex align-items-center gap-5">
                                    <p className="d-flex align-items-center gap-2"><span className="shipping__icon"><i className="ri-car-line"></i></span> No shipping charge</p>
                                    <p className="d-flex align-items-center gap-2"><span className="shipping__icon"><i className="ri-shield-check-line"></i></span> 100% secure checkout</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="hero__img">
                                <img src={heroImg} alt="hero-img" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Category />
            </section>
        </Helmet>
    )
}

export default Home;