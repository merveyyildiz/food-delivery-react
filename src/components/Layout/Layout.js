import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";
import Carts from "../UI/cart/Carts";
import { useSelector } from "react-redux";
const Layout = () => {
    const showCart = useSelector((state)=> state.cartUi.cartIsVisible);

    return (
        <div className="d-flex flex-column h-100">
            <Header />
            { showCart &&  <Carts /> }
            <div className="flex-fill">
                <Routers />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;