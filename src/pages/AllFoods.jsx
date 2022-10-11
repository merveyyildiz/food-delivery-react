import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import ReactPaginate from "react-paginate";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import ProductCart from "../components/UI/product-card/ProductCard";
import products from "../assets/fake-data/products";

import "../styles/all-foods.scss";
import "../styles/pagination.scss";

const AllFoods = () => {
    const [searchText, setSearchText] = useState("");
    const [pageNumber, setPageNumber] = useState(0);

    const searchedProduct = products.filter(item => {
        if(searchText.value === "") return item;
        if(item.title.toLowerCase().includes(searchText.toLowerCase())) {
            return item;
        }
    });

    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);
    const pageCount = Math.ceil(searchedProduct.length / productPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    
    return (
        <Helmet title="All Foods">
            <CommonSection title="All Foods" />

            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" xs="12">
                            <div className="search__widget d-flex justify-content-between align-items-center">
                                <input type="text" placeholder="I'm looking for" value={searchText} onChange={e => {setSearchText(e.target.value); setPageNumber(0)}} />
                                <span><i className="ri-search-line"></i></span>
                            </div>
                        </Col>

                        <Col lg="6" md="6" sm="12" xs="12">
                            <div className="sorting__widget text-end">
                              <select >
                                <option>Default</option>
                                <option value="ascending">Alphabetically, A-Z</option>
                                <option value="descending">Alphabetically, Z-A</option>
                                <option value="high-price">High Price</option>
                                <option value="low-price">Low Price</option>
                              </select>
                            </div>
                        </Col>

                        {
                            displayPage.map(product=> (
                                <Col lg="3" md="4" sm="6" xs="6" key={product.id}>
                                    <ProductCart item={product} />
                                </Col>
                            ))
                        }
                        <div>
                            <ReactPaginate 
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel = {"Prev"}
                                nextLabel = {"Next"}
                                containerClassName="paginationBtns"
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default AllFoods;