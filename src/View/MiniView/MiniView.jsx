import React from 'react'
import {Link} from "react-router-dom"
import arrow from "../../Images/right-arrow.svg"

export default function MiniView({display}) {
            switch (display) {
                case "Services":
                    return(
                        <div className="bio">
                            <p className="introduction">-Introduction</p>
                            <h3 className="bioHeading">Software Developer and Product Designer </h3><h3>based in Lagos, Nigeria.</h3>
                            <p className="introduction" id="paragraph">
                            But I must explain to you how all this mistaken idea of denouncing pleasure and 
                            praising pain was born and I will give you a complete account of the system,
                            and expound the actual teachings.</p>
                            <div className="learnMore">
                            <Link to="/services">
                                <div className="text">
                                    <p>my story</p>
                                    <img src={arrow} alt="learn more"/>
                                </div>
                            </Link>
                            <hr/>
                            </div>
                        </div>      
                    )
                break;
                case "Work":
                    return(
                        <div className="bio">
                        <p className="introduction">-Portfolio</p>
                        <h3 className="bioHeading">All Creative works Selected Projects.</h3>
                        <p className="introduction" id="paragraph">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and 
                        praising pain was born and I will give you a complete account of the system,
                        and expound the actual teachings.</p>
                        <div className="learnMore">
                        <div className="text">
                            <p>Explore More</p>
                            <img src={arrow} alt="learn more"/>
                        </div>
                        <hr/>
                        </div>
                        </div>
                    )
                    break;
                case "Contact":
                    return(
                        <div className="bio">
                        <p className="introduction">-Contact</p>
                        <h3 className="bioHeading">Any Type of Query or Disscussion</h3>
                        <p className="introduction" id="paragraph">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and 
                        praising pain was born and I will give you a complete account of the system,
                        and expound the actual teachings.</p>
                        <div className="learnMore">
                        <div className="text">
                            <p>say hi!</p>
                            <img src={arrow} alt="learn more"/>
                        </div>
                        <hr/>
                        </div>
                        </div>
                    )
                    break;
                default:
                    break;
            }
}
