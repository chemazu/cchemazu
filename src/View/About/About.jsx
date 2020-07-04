import React from 'react'
import "./About.scss"
import Skater from "../../Images/Skater.svg"
import linkedin from "../../Images/linkedin.svg"
import instagram from "../../Images/instagram.svg"

export default function About() {
    return (
        <div className ="About">
            <h2>Chemazu</h2>
            <h2>Chukwuemeka.</h2>
            <hr/>
            <div className="socialWrapper"><img src= {linkedin} alt="@cchemazu" className="socials"/>
            {/* <img src= {instagram} alt="@cchemazu" className="socials"/> */}
            </div>
        </div>
    )
}
