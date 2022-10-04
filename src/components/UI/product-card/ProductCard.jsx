import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/product-card.scss";

const ProductCard = (props) => {
    const {id, title, image01, price} = props.item;

    return (
        <div className="product__item p-4 d-flex flex-column mt-4">
            <div className="product__img mb-2">
                <img src={image01} alt="product-img " className="w-50"/>
            </div>

            <div className="product__content">
                <h6 className="text-center mb-3"><Link to={`/foods:${id}`}>{title}</Link></h6>
                <div className="d-flex align-items-center justify-content-between w-100">
                    <span className="product__price">${price}</span>
                    <button className="addToCard__btn">Add to card</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;