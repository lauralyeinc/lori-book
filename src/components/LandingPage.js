import React from 'react'; 
import styled from "styled-components"; 
import ebookcoverpicture from "../images/ebookcoverpicture.jpg"; 

import LargeDivider from "./LargeDivider.js"; 
import starfull from "../icomoon/PNG/starfull.png";
import starhalf from "../icomoon/PNG/starhalf.png";
import starempty from "../icomoon/PNG/starempty.png"; 
import quotesleft from "../icomoon/PNG/quotesleft.png";
import quotesright from "../icomoon/PNG/quotesright.png"; 



const LandingPage = () => {
    return (
        <div className="Landing-Page">
            <Div className="Current-Area">
                <h1> One High School Season in USRPT </h1>
                <p> A few words about the book goes here </p>
                <div className="eBook-img">
                <img src={ebookcoverpicture} alt="One High School Season in USRPT By Lori Jo McCullough"/> 
                </div>
                <h2> 
                <A href="https://www.amazon.com/gp/product/B089QRPT1Y?pf_rd_r=AK4NJQVRQY9879EE4BM0&pf_rd_p=edaba0ee-c2fe-4124-9f5d-b31d6b1bfbee">Pre-order Now!</A>
                </h2>
                <p> Or goes here, or reviews, praise, etc.  </p>
            </Div>
            <LargeDivider /> 
            <DarkDiv className="Another-Section">
                <H1> Praises & Reviews </H1>
                <Reviewer className="Review">
                    <p>
                    <Quotes src={quotesleft} alt="quotesleft" width="15" />
                    Reviews from coaches, swimmer etc. Can update this later, example of space for now. !Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke!
                    <img src={quotesright} alt="quotesright" width="15" /> 
                    </p>
                    <img src={starfull} alt="starfull" width="20" />
                    <img src={starfull} alt="starfull" width="20" />
                    <img src={starfull} alt="starfull" width="20" />
                    <img src={starfull} alt="starfull" width="20" />
                    <img src={starfull} alt="starfull" width="20" />
                    <h5> --- Mock Coach, Mercersburg,PA </h5>
                </Reviewer>
                <Reviewer className="Review">
                    <p>
                    <Quotes src={quotesleft} alt="quotesleft" width="15" />
                    Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama garlic courgette coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush tomato.
                    <img src={quotesright} alt="quotesright" width="15" />
                    </p>
                    <img src={starfull} alt="starfull" width="20" />
                    <img src={starfull} alt="starfull" width="20" />
                    <img src={starfull} alt="starfull" width="20" />
                    <img src={starfull} alt="starfull" width="20" />
                    <img src={starhalf} alt="starhalf" width="20"/>
                    <h5> --- Mock Coach, Chambersburg,PA </h5>

                </Reviewer>
            </DarkDiv> 
        </div>
    )
}

export default LandingPage; 

const Div = styled.div`
text-align: center; 
`
const A = styled.a`
text-decoration: none;
color: 	#2f4858; 
`

const DarkDiv = styled.div`
text-align: center; 
background: #a1cdf4; 
width: 90%; 
margin: 0 auto; 
`

const H1 = styled.h1`
color: #001f54; 
font-size: 2.5rem; 
padding: 1rem;
`

const Reviewer = styled.div`
text-align: center;
padding-left: 3.5rem;
padding-right: 3.5rem;
padding-bottom: 1.5rem; 
`

const Quotes = styled.img`
padding: .25rem;
`