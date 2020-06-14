import React from 'react'; 
import styled from "styled-components"; 
import ebookcoverpicture from "../images/ebookcoverpicture.jpg"; 

const LandingPage = () => {
    return (
        <div className="Landing-Page">
            <div className="Current-Area">
                <h1> 
                <A href="https://www.amazon.com/gp/product/B089QRPT1Y?pf_rd_r=AK4NJQVRQY9879EE4BM0&pf_rd_p=edaba0ee-c2fe-4124-9f5d-b31d6b1bfbee">Pre-order Here!</A>
                </h1>
                <div className="eBook-img">
                <img src={ebookcoverpicture} alt="One High School Season in USRPT By Lori Jo McCullough"/> 
                <h5> Amazon eBook </h5>
                </div>
            </div>
        </div>
    )
}

export default LandingPage; 

const A = styled.a`
text-decoration: none;
color: 	#2f4858; 
`