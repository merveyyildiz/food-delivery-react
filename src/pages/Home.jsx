import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
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
import whyImg from "../assets/images/location.png";
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
    const [category, setCategory]= useState("ALL");
    const [allProducts, setAllProducts] = useState(products);
    const [hotPizza, setHotPizza] = useState([]);

    useEffect(() => {
        const filteredPizza = products.filter(item => item.category === "Pizza");
        const slicePizza = filteredPizza.slice(0,4);
        setHotPizza(slicePizza);
    },[])

    useEffect(() => {
        if(category === "ALL") {
            setAllProducts(products);
        }
        else if(category === "BURGER") {
            const filteredProducts = products.filter(item => item.category === "Burger");
            setAllProducts(filteredProducts); 
        }
        else if(category === "PIZZA") {
            const filteredProducts = products.filter(item => item.category === "Pizza");
            setAllProducts(filteredProducts); 
        }
        else if(category === "BREAD") {
            const filteredProducts = products.filter(item => item.category === "Bread");
            setAllProducts(filteredProducts); 
        }
    }, [category])

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
                                <button className={`${category === "ALL" ? "foodBtnActive": ""} `} onClick={() => setCategory("ALL")}>All</button>
                                <button className={`${category === "BURGER" ? "foodBtnActive": ""} `} onClick={() => setCategory("BURGER")}><img src={foodCategoryImg01} alt="foodcategory" />Burger</button>
                                <button className={`${category === "PIZZA" ? "foodBtnActive": ""} `} onClick={() => setCategory("PIZZA")}><img src={foodCategoryImg02} alt="foodcategory" />Pizza</button>
                                <button className={`${category === "BREAD" ? "foodBtnActive": ""} `} onClick={() => setCategory("BREAD")}><img src={foodCategoryImg03} alt="foodcategory" />Bread</button>
                            </div>
                        </Col>

                        {
                            allProducts.map(item => (
                                <Col lg="3" md="4" key={item.id}>
                                    <ProductCard item={item}/>
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </section>

            <section>
                  <Container>
                    <Row>
                        <Col lg="6">
                            <img src={whyImg} alt="why-tasty-treat" className="w-100" />
                        </Col>
                        <Col lg="6">
                            <div className="why__tasty-treat">
                                <h2 className="why__tasty-title mb-4">Why<span> Trasty Treat?</span></h2>
                                <p className="why__tasty-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est assumenda, excepturi unde quas cupiditate in quae vitae doloremque expedita necessitatibus.</p>
                                <ListGroup className="mt-5">
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="why__list-title d-flex align-items-center gap-2">
                                            <i className="ri-checkbox-circle-line"></i> Frash and tasty foods
                                        </p>
                                        <p className="why__list-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptates.</p> 
                                    </ListGroupItem>

                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="why__list-title d-flex align-items-center gap-2">
                                            <i className="ri-checkbox-circle-line"></i> Quality support foods
                                        </p>
                                        <p className="why__list-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptates.</p> 
                                    </ListGroupItem>

                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="why__list-title d-flex align-items-center gap-2">
                                            <i className="ri-checkbox-circle-line"></i> Order from any location
                                        </p>
                                        <p className="why__list-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptates.</p> 
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>      


            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h2>Hot Pizza</h2>
                        </Col>

                        {
                            hotPizza.map((item) => (
                                <Col lg="3" md="4" key={item.id}>
                                    <ProductCard item={item} />
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