import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import Category from "../components/UI/category/Category";
import ProductCard from "../components/UI/product-card/ProductCard";
import products from "../assets/fake-data/products";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import "../styles/home.scss";

const featureData = [
    {
        title: "Quick Delivery",
        imgUrl: featureImg01,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, reiciendis."
    },
    {
        title: "Super Dine In",
        imgUrl: featureImg02,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, reiciendis."
    },
    {
        title: "Easy Pick Up",
        imgUrl: featureImg03,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, reiciendis."
    }
]

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

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h5 className="feature__subtitle mb-4">What we serve</h5>
                            <h2 className="feature__title">Just sit back at home</h2>
                            <h2 className="feature__title">we will <span>take care</span></h2>
                            <p className="mb-1 mt-4 feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aspernatur!</p>
                            <p className="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quod.</p>
                        </Col>

                        {
                            featureData.map((item, index) => (
                                <Col lg="4" md="4" key={index} className="mt-5">
                                    <div className="feature__item d-flex flex-column px-4 py-3 justify-content-center align-items-center">
                                        <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3"/>
                                        <h5 className="fw-bold mb-3">{item.title}</h5>
                                        <p className="text-center">{item.desc}</p>
                                    </div>
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2>Popular Foods</h2>
                        </Col>
                        <Col lg="12" className="mt-4 mb-3">
                            <div className="food__category d-flex justify-content-center align-items-center gap-5">
                                <button className="all__btn foodBtnActive">All</button>
                                <button><img src={foodCategoryImg01} alt="foodcategory" />Burger</button>
                                <button><img src={foodCategoryImg02} alt="foodcategory" />Pizza</button>
                                <button><img src={foodCategoryImg03} alt="foodcategory" />Bread</button>
                            </div>
                        </Col>

                        {
                            products.map(item => (
                                <Col lg="3" md="4" key={item.id}>
                                    <ProductCard item={item}/>
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home;