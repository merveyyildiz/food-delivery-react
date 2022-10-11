import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.scss";

const Checkout = () => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const shippingCost = 5;
    const totalAmount = cartTotalAmount + shippingCost;
    const [formValue, setFormValue] = useState({});

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value});
    }

    const submitHandle = (e) => {
        e.preventDefault();
    }

    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout" />
            <section className="checkout">
                <Container>
                    <Row> 
                        <Col lg="8" md="6">
                            <h6 className="mb-4">Shipping Address</h6>
                            <form className="form" onSubmit={submitHandle}>
                                <div className="form__group">
                                    <input type="text" name="name" className="form-control" placeholder="Enter your name" required onChange={(e =>handleChange(e))}/>
                                </div>

                                <div className="form__group">
                                    <input type="email" name="email" className="form-control my-2" placeholder="Enter your email" required onChange={(e =>handleChange(e))}/>
                                </div>

                                <div className="form__group">
                                    <input type="number" name="phone" className="form-control my-2" placeholder="Enter your phone number" required onChange={(e =>handleChange(e))}/>
                                </div>

                                <div className="form__group">
                                    <input type="text" name="country" className="form-control my-2" placeholder="Country" required onChange={(e =>handleChange(e))}/>
                                </div>

                                <div className="form__group">
                                    <input type="text" name="city" className="form-control my-2" placeholder="City" required onChange={(e =>handleChange(e))}/>
                                </div>

                                <div className="form__group">
                                    <input type="number" name="postal-code" className="form-control my-2" placeholder="Postal code" required onChange={(e =>handleChange(e))}/>
                                </div>

                                <div className="form__group">
                                    <textarea name="address" className="form-control my-2" placeholder="Address" row="3" required onChange={(e =>handleChange(e))}/>
                                </div>
                                <button type="submit" className="addToCard__btn">Payment</button>
                            </form>
                          
                        </Col>

                        <Col lg="4" md="6">
                            <div className="checkout__bill">
                                <h6 className="checkout__bill-item">Subtotal: <span>${cartTotalAmount}</span></h6>
                                <h6 className="checkout__bill-item">Shipping: <span>${shippingCost}</span></h6>
                                <h5 className="mt-2 checkout__bill-total">Total: <span>${totalAmount}</span></h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            </Helmet>
    )
}

export default Checkout;