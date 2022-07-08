import "./services.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Services() {
    return (
        <section id='services-container'>
            <div className="services-background" style={{
                backgroundImage: "url(images/ux-house-achtergrond.png)"
            }}>
                <h1>
                    services
                </h1>
                <div className="services-lijn">
                    <img src="images/ux-house-lijn-services.svg" alt="lijn" />
                </div>
                <div className="services-cirkel">
                    <img src="images/ux-house-cirkel.svg" alt="cirkel" />
                </div>
                <div className="services-kruis">
                    <img src="images/ux-house-kruis.svg" alt="kruis" />
                </div>

                <div className="services-cards-container">

                    <div className="contracts">
                        <Link to="/contracts">
                            <img className="dark" src="images/ux-house-upside-down.svg" alt="contract button" />
                        </Link>
                        {/* <img className="light" src="images/ux-house-upside-down-reverse.svg" alt="contract button" /> */}
                        <h3>
                            contracts
                        </h3>
                    </div>

                    <div className="permanent">
                        <Link to="/permanent">
                            <img src="images/ux-house-upside-down.svg" alt="permanent button" />
                        </Link>
                        <h3>
                            permanent
                        </h3>
                    </div>

                    <div className="interim">
                        <Link to="/interim">
                            <img src="images/ux-house-upside-down.svg" alt="interim button" />
                        </Link>
                        <h3>
                            interim
                        </h3>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
