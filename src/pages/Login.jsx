import React, { useState } from "react";
import { Link } from  "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import  "../styles/login.scss";

const Login = () => {
    const [formValue, setFormValue] = useState({});

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <Helmet title="Login"> 
            <CommonSection title="Login" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className=" text-center m-auto">
                            <form className="login__form" onSubmit={submitHandler}>
                                <div>
                                    <input type="email" placeholder="Email" name="email" required className="form-control my-2" onChange={e => handleChange(e)}/>
                                </div>

                                <div>
                                    <input type="password" placeholder="Password" name="password" required className="form-control  my-2" onChange={e => handleChange(e)}/>
                                </div>
                                <button type="submit" className="addToCard__btn mt-3">Login</button>
                            </form>
                            <Link to="/register" className="login__link">Don't have an account? Create an account</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Login;