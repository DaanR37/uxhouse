import "./homepage.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Homepage() {
    return (
        <section id='homepage-container'>
            <div className="homepage-background" style={{
                backgroundImage: "url(images/ux-house-achtergrond.png)"
            }}>
                <div className="homepage-lijn">
                    <img src="images/ux-house-lijn.svg" alt="lijn" />
                </div>
                <div className="homepage-cirkel">
                    <img src="images/ux-house-cirkel.svg" alt="cirkel" />
                </div>
                <div className="homepage-kruis">
                    <img src="images/ux-house-kruis.svg" alt="kruis" />
                </div>

                <div className="content">
                    <button className="ux-logo">
                        <Link to="/">
                            <motion.img
                                initial={{ y: '+50vh' }}
                                animate={{
                                    scale: 0.8,
                                    y: 0,
                                    // rotateY: 360
                                }}
                                transition={{
                                    duration: 1.5,
                                    type: 'spring'
                                }}
                                whileHover={{
                                    scale: 1,
                                    // rotateX: 360
                                }}
                                src="images/ux-house-logo.svg" alt="ux house logo"
                            />
                        </Link>
                    </button>

                    <div className="content-btn-vacatures">
                        <h3 className="nav-title-vacatures">
                            vacatures
                            <br></br>
                            & projecten
                            <Link to="/vacaturesenprojecten">
                                <svg width="319" height="319" viewBox="0 0 319 319" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M159.16 303.85C239.07 303.85 303.85 239.07 303.85 159.16C303.85 79.2499 239.07 14.47 159.16 14.47C79.2499 14.47 14.47 79.2499 14.47 159.16C14.47 239.07 79.2499 303.85 159.16 303.85Z" stroke="url(#paint0_linear_403_3)" stroke-width="28.94" stroke-miterlimit="10" />
                                    <defs>
                                        <linearGradient id="paint0_linear_403_3" x1="-2.89623e-05" y1="159.16" x2="318.32" y2="159.16" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0071BC" />
                                            <stop offset="1" stop-color="#0000FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                        </h3>
                    </div>

                    <div className="content-btn-services">
                        <h3 className="nav-title-vacatures">
                            services
                            <Link to="/services">
                                <svg width="319" height="319" viewBox="0 0 319 319" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M159.16 303.85C239.07 303.85 303.85 239.07 303.85 159.16C303.85 79.2499 239.07 14.47 159.16 14.47C79.2499 14.47 14.47 79.2499 14.47 159.16C14.47 239.07 79.2499 303.85 159.16 303.85Z" stroke="url(#paint0_linear_403_3)" stroke-width="28.94" stroke-miterlimit="10" />
                                    <defs>
                                        <linearGradient id="paint0_linear_403_3" x1="-2.89623e-05" y1="159.16" x2="318.32" y2="159.16" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0071BC" />
                                            <stop offset="1" stop-color="#0000FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                        </h3>
                    </div>

                    <div className="content-btn-contact">
                        <h3 className="nav-title-vacatures">
                            contact
                            <Link to="/">
                                <svg width="319" height="319" viewBox="0 0 319 319" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M159.16 303.85C239.07 303.85 303.85 239.07 303.85 159.16C303.85 79.2499 239.07 14.47 159.16 14.47C79.2499 14.47 14.47 79.2499 14.47 159.16C14.47 239.07 79.2499 303.85 159.16 303.85Z" stroke="url(#paint0_linear_403_3)" stroke-width="28.94" stroke-miterlimit="10" />
                                    <defs>
                                        <linearGradient id="paint0_linear_403_3" x1="-2.89623e-05" y1="159.16" x2="318.32" y2="159.16" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#0071BC" />
                                            <stop offset="1" stop-color="#0000FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
