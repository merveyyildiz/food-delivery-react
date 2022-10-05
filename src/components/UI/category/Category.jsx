import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";
import "../../../styles/category.scss";

const catergoryDate = [
    {
        display: "Fastfood",
        imgUrl: categoryImg01
    },
    {
        display: "Pizza",
        imgUrl: categoryImg02
    },
    {
        display: "Asia Food",
        imgUrl: categoryImg03
    },
    {
        display: "Row Meet",
        imgUrl: categoryImg04
    }
]

const Category = () => {
    return (
        <Container>
            <Row>
                {
                    catergoryDate.map((item, index) => (
                        <Col lg="3" md="4" sm="6" xs="6" key={index} className="mb-4">
                            <div className="category__item d-flex align-items-center gap-3 justify-content-center">
                                <img src={item.imgUrl} alt="category__item" />
                                <h6>{item.display}</h6>
                            </div>
                           
                        </Col>
                    ))
                }
               
            </Row>
        </Container>
    )
}

export default Category;