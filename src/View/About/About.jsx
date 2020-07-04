import React from 'react'
import "./About.scss"
import Skater from "../../Images/Skater.svg"
import linkedin from "../../Images/linkedin.svg"
import instagram from "../../Images/instagram.svg"
import arrow from "../../Images/right-arrow.svg"

export default function About() {
    return (
        <div className ="About">
            <div className="topBar">
                <div className="topBarFirst">
                    <h2>Chemazu</h2>
                    <h2>Chukwuemeka.</h2>
                    <hr/>
                    <div className="socialsWrapper">
                <img src= {linkedin} alt="@cchemazu" className="socials"/>
            </div>
                </div>
            <div className="topBarSecond">
                <div className="topBarSecond-first">
                <p>Services</p>
                <p>Work</p>
                <p>Blog</p>
                </div>
                <div className="bio">
                    <p className="introduction">-Introduction</p>
                    <h3 className="bioHeading">Software Developer and Product Designer </h3><h3>based in Lagos,Nigeria.</h3>
                    <p className="introduction">
                    But I must explain to you how all this mistaken idea of denouncing <br/>pleasure and 
                    praising pain was born and I will give you <br/>a complete account of the system,
                    and expound <br/>the actual teachings.</p>
                    <div className="learnMore">
                    <div className="text">
                        <p>my story</p>
                        <img src={arrow} alt="learn more"/>
                    </div>
                    <hr/>
                    </div>
                    

                </div>
            </div>
            </div>
            
            
            
           
        </div>
    )
}
