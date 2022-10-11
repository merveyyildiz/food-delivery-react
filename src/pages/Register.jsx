import React, { useState } from "react";
import { Link } from  "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import  "../styles/login.scss";

const Register = () => {
    const [formValue, setFormValue] = useState({});

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <Helmet title="Register"> 
            <CommonSection title="Register" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className=" text-center m-auto">
                            <form className="login__form" onSubmit={submitHandler}>
                                <div>
                                    <input type="text" placeholder="Name" name="name" required className="form-control my-2" onChange={e => handleChange(e)}/>
                                </div>

                                <div>
                                    <input type="email" placeholder="Email" name="email" required className="form-control my-2" onChange={e => handleChange(e)}/>
                                </div>

                                <div>
                                    <input type="password" placeholder="Password" name="password" required className="form-control  my-2" onChange={e => handleChange(e)}/>
                                </div>

                                <button type="submit" className="addToCard__btn mt-3">Signup</button>
                            </form>
                            <Link to="/login" className="login__link">Have an account? Login</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Register;