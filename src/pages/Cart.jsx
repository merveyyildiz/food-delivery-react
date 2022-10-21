import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-card/cartSlice";
import "../styles/cart-page.scss";

const Cart = () => {
    const dispatch = useDispatch();

    const cartData = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const deleteItem = (id) => {
        dispatch(cartActions.deleteItem(id));
    }

    return (
        <Helmet title="Cart">
            <CommonSection title="Your Cart" />

            <section className="cart-table">
                <Container>
                    <Row>
                        <Col lg="12">
                            {
                                cartData.length === 0 ? <h4 className="text-center">Your cart is empty</h4> :
                                <>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Title</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartData.map(item => (
                                                    <tr key={item.id}>
                                                    <td className="text-center py-1"><img src={item.image01} alt="cart" className="cart-table__image" /></td>
                                                    <td className="text-center py-1">{item.title}</td>
                                                    <td className="text-center py-1">${item.price}</td>
                                                    <td className="text-center py-1">{item.quantity}x</td>
                                                    <td className="text-center py-1"><i className="ri-delete-bin-line  cart-table__delete" onClick={()=> deleteItem(item.id)}></i></td>
                                                </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <div className="text-end">
                                        <h6 >Subtotal: ${totalAmount}</h6>
                                        <p className="cart-table__desc">Taxes and shipping will calculate at checkout</p>
                                        <button className="addToCard__btn me-2"><Link to="/foods">Continue Shopping</Link></button>
                                        <button className="addToCard__btn ms-2"><Link to="/checkout">Proceed Checkout</Link></button>
                                    </div>
                                </>
                            }
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Cart;