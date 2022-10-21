import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import ProductCart from "../components/UI/product-card/ProductCard";

import { cartActions } from "../store/shopping-card/cartSlice";
import products from "../assets/fake-data/products";
import "../styles/product-detail.scss";

const FoodDetails = () => {

    const [tab, setTab] = useState("desc");
    const [formValue, setFormValue] = useState({});

    const { id } = useParams();
    const dispatch = useDispatch();

    const product = products.find(product => product.id === id);
    const [previewImg, setPreviewImg] = useState(product.image01);

    const relatedProduct = products.filter(item => {
        if(item.category === product.category && item.id !== product.id) {
            return item;
        };
        return false;
    })

    const addCart = () => {
        dispatch(cartActions.addItem(product));
    }

    const submitHandle = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value});
    }

    useEffect(()=> {
        setPreviewImg(product.image01);
        window.scrollTo(0,0);
    },[product])

    return (
        <Helmet title="Food Detail">
            <CommonSection title={product.title} />

            <section className="product-detail">
                <Container>
                    <Row>
                        <Col lg="2" md="2">
                            <div className="images">
                                <div className="images__item">
                                 <span onClick={() => setPreviewImg(product.image01)}><img src={product.image01} alt=""  className="w-50"/></span> 
                                </div>
                                <div className="images__item my-2" >
                                <span  onClick={() => setPreviewImg(product.image02)}><img src={product.image02} alt=""  className="w-50"/></span>
                                </div>
                                <div className="images__item">
                                <span  onClick={() => setPreviewImg(product.image03)}><img src={product.image03} alt=""  className="w-50"/> </span>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="4">
                            <div className="main-img">
                                <img src={previewImg} alt="" className="w-100" />
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="content">
                                <h2 className="content__title">{product.title}</h2>
                                <p className="content__price">Price: <span>${product.price}</span></p>
                                <p className="content__category mb-3">Category: <span>{product.category}</span></p>

                                <button className="addToCard__btn" onClick={addCart}>Add to Cart</button>
                            </div>
                        </Col>

                        <Col lg="12">
                            <div className="tabs d-flex align-items-center gap-5 py-3">
                                <h6 className={tab === "desc" ? "tabs__active" : ""} onClick={() => setTab("desc")}>Description</h6>
                                <h6 onClick={() => setTab("rev")} className={tab === "rev" ? "tabs__active" : ""}>Review</h6>
                            </div>

                            {
                                tab === "desc" ? 
                                <div className="tabs__content">
                                    <p>{product.desc}</p>
                                </div>
                            :
                            <div className="mt-4">
                                <div className="review">
                                    <p className="review__user-name mb-0">Jhon Doe</p>
                                    <p className="review__user-email">jhon@gmail.com</p>
                                    <p className="review__user-text">Great product</p>
                                </div>

                                <div className="review">
                                    <p className="review__user-name mb-0">Mark Doe</p>
                                    <p className="review__user-email">mark@gmail.com</p>
                                    <p className="review__user-text">Perfect</p>
                                </div>

                                <div className="review">
                                    <p className="review__user-name mb-0">Phoebe Doe</p>
                                    <p className="review__user-email">phoebe@gmail.com</p>
                                    <p className="review__user-text">Great product</p>
                                </div>

                                <form className="form" onSubmit={submitHandle}>
                                    <div className="form__group">
                                        <input type="text" placeholder="Enter your name" name="name" onChange={(e =>handleChange(e))} required/>
                                    </div>
                                    <div className="form__group">
                                        <input type="email" placeholder="Enter your email" name="email" onChange={(e =>handleChange(e))} required/>
                                    </div>
                                    <div className="form__group">
                                        <textarea type="text" rows="5" placeholder="Enter your message" name="message" onChange={(e =>handleChange(e))} required/>
                                    </div>

                                    <button className="addToCard__btn">Submit</button>
                                </form>
                            </div>
                            }
                        </Col>

                        <Col lg="12">
                            <h4 className="text-center mt-5">You might also like</h4>
                        </Col>
                        {
                            relatedProduct.map(product => (
                                <Col lg="3" md="4" sm="6" xs="6" key={product.id}>
                                    <ProductCart item={product}/>
                                </Col>
                            ))
                        }
                        
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default FoodDetails;