import React from "react"
import { ListGroupItem } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-card/cartSlice";
import "../../../styles/cart-item.scss";

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const {title, image01, price, quantity, totalPrice,id} = item;

    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }));
    }
    const decrementItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }
  return (
    <ListGroupItem className="border-0 cart__item">
        <div className="cart__item-info d-flex gap-2">
            <img src={image01} alt="product" />

            <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
                <div>
                    <h6 className="cart__product-title">{title}</h6>
                    <p className="d-flex align-items-center gap-5 cart__product-price">
                        {quantity}x <span>${totalPrice}</span>
                    </p>
                    <div className="d-flex align-items-center justify-content-between cart__item-btns">
                        <span className="cart__increase-btn" onClick={incrementItem}>
                            <i className="ri-add-line"></i>
                        </span>
                        <span className="cart__quantity">{quantity}</span>
                        <span className="cart__decrease-btn" onClick={decrementItem}>
                            <i className="ri-subtract-line"></i>
                        </span>
                        
                    </div>
                </div>

                <span className="cart__delete-btn" onClick={deleteItem}><i className="ri-close-line"></i></span>
            </div>
        </div>
    </ListGroupItem>
  )
}

export default CartItem