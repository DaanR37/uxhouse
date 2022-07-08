import "./vacatures.scss";
import { Link } from "react-router-dom";

export default function Vacatures() {
    return (
        <section id="vacatures-page-container">
            <div className="vacatures-page-background" style={{
                backgroundImage: "url(images/ux-house-achtergrond.png)"
            }}>
                <h1>
                    vacatures
                </h1>

                <div className="ux-logo-upside-down-vacatures">
                    <img src="images/ux-house-upside-down-reverse.svg" alt="logo upside down"></img>
                </div>

                <div className="vacatures-card-container">

                    <div className="card one">
                        <Link to="/">
                            <h2>team lead ux</h2>
                            <img src="images/ux-house-blok.svg" alt="block" />
                        </Link>
                    </div>

                    <div className="card two">
                        <Link to="/">
                            <h2>senior ux designer</h2>
                            <img src="images/ux-house-blok.svg" alt="block" />
                        </Link>
                    </div>

                    <div className="card three">
                        <Link to="/">
                            <h2>ux designer</h2>
                            <img src="images/ux-house-blok.svg" alt="block" />
                        </Link>
                    </div>

                    <div className="card four">
                        <Link to="/">
                            <h2>global cloud architect</h2>
                            <img src="images/ux-house-blok.svg" alt="block" />
                        </Link>
                    </div>

                    <div className="card five">
                        <Link to="/">
                            <h2>product owner</h2>
                            <img src="images/ux-house-blok.svg" alt="block" />
                        </Link>
                    </div>

                    <div className="card six">
                        <Link to="/">
                            <h2>project manager</h2>
                            <img src="images/ux-house-blok.svg" alt="block" />
                        </Link>
                    </div>
                    
                </div>

                <div className="vacatures-page-cirkel">
                    <img src="images/ux-house-cirkel.svg" alt="cirkel" />
                </div>

                <div className="vacatures-page-kruis">
                    <img src="images/ux-house-kruis.svg" alt="kruis" />
                </div>
            </div>
        </section>
    )
}
