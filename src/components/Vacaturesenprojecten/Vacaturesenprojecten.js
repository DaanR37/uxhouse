import "./vacaturesenprojecten.scss";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

export default function Vacaturesenprojecten() {
    return (
        <section id="vacaturesenprojecten-container">
            <div className="vacaturesenprojecten-background" style={{
                backgroundImage: "url(images/ux-house-achtergrond.png)"
            }}>
                <h1>
                    vacatures
                    <br></br>
                    & projecten
                </h1>
                <div className="vacaturesenprojecten-lijn">
                    <img src="images/ux-house-lijn-services.svg" alt="lijn" />
                </div>
                <div className="vacaturesenprojecten-cirkel">
                    <img src="images/ux-house-cirkel.svg" alt="cirkel" />
                </div>
                <div className="vacaturesenprojecten-kruis">
                    <img src="images/ux-house-kruis.svg" alt="kruis" />
                </div>

                <div className="vacaturesenprojecten-card-container">

                    <div className="vacatures">
                        <Link to="/vacatures">
                            <img src="images/ux-house-upside-down.svg" alt="vacatures button" />
                        </Link>
                        <h3>
                            vacatures
                        </h3>
                    </div>

                    <div className="projecten">
                        <Link to="/projecten">
                            <img src="images/ux-house-upside-down.svg" alt="projecten button" />
                        </Link>
                        <h3>
                            projecten
                        </h3>
                    </div>

                </div>
            </div>
        </section>
    )
}
