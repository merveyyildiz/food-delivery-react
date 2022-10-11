import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
const Contact = () => {
    return (
        <Helmet title="Contact">
            <CommonSection title="Contact" />
            <div className="d-flex align-items-center justify-content-center flex-column mt-5">
                <h5>Phone: 0262 123 45 56</h5>
                <h5>Address: Kocaeli/Darıca</h5>
            </div>
        </Helmet>
    )
}

export default Contact;