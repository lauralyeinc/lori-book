import React from 'react';
import styled from "styled-components"; 

const NavBar = () => {
    return (
    <Div className="nav">
        <div className="Author Logo">
            <Title> Coach Lori Jo McCullough </Title>
        </div>
        <Navdiv className="Link-Area">
            <Anchors href='/'> Home </Anchors>
            <Anchors href='https://coachmccullough.weebly.com/'> Blog</Anchors>
            <Anchors href='/about'> About </Anchors>
            <Anchors href='https://Www.myswimvids.com'> Swim Services </Anchors>
            <Anchors href='/contact'> Contact </Anchors>
            <Anchors href='https://www.amazon.com/gp/product/B089QRPT1Y?pf_rd_r=XRAY64NQS3CCSC045DG9&pf_rd_p=edaba0ee-c2fe-4124-9f5d-b31d6b1bfbee'> Purchase </Anchors>
        </Navdiv>
    </Div>
    );
};

export default NavBar; 

const Div = styled.div`
margin: auto;
width: 100%;
`

const Title = styled.h1`
margin: center;
font-style: oblique;
font-size: 2rem; 

`

const Navdiv = styled.div`
font-size: 1.25rem;
display: flex;
align-items: center;
background: #2f4858;
`

const Anchors = styled.a`
margin: auto;
color: #9aadbf;
padding: 1rem;
cursor: pointer;  
text-decoration: none; 
&:hover {
    color: #a1cdf4;
    }
`