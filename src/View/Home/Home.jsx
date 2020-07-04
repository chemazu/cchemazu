import React from 'react'
import Intro from '../../Custom/Intro/Intro'
import "./Home.scss"

export default function Home() {
    return (
        <div className ="Home">
            <div className="nav">
            <Intro/>
            <div className="navItem">
                <p>me</p>
                <p>request a service</p>
                <p>shop</p>
                <p>contact</p>
            </div>
            </div>
        </div>
    )
}
