import "./projecten.scss";
import { Link } from "react-router-dom";

export default function Projecten() {
    return (
        <section id="projecten-page-container">
            <div className="projecten-page-background" style={{
                backgroundImage: "url(images/ux-house-achtergrond.png)"
            }}>
                <h1>
                    projecten
                </h1>

                <div className="ux-logo-upside-down-projecten">
                    <img src="images/ux-house-upside-down-reverse.svg" alt="logo upside down"></img>
                </div>

                <div className="projecten-card-container">
                    <div className="card-p one">
                        <Link to="/ing">
                            <h2>ing</h2>
                            <img src="images/ux-house-blok.svg" alt="block" />
                        </Link>
                    </div>
                    <div className="card-p two">
                        <Link to="/">
                            <h2>nike amsterdam</h2>
                            <img src="images/ux-house-blok.svg" alt="block" />
                        </Link>
                    </div>
                    <div className="card-p three">
                        <Link to="/">
                            <h2>wetransfer</h2>
                            <img src="images/ux-house-blok.svg" alt="block" />
                        </Link>
                    </div>
                    <div className="card-p four">
                        <Link to="/">
                            <h2>off white</h2>
                            <img src="images/ux-house-blok.svg" alt="block" />
                        </Link>
                    </div>
                    <div className="card-p five">
                        <Link to="/">
                            <h2>global iffqd</h2>
                            <img src="images/ux-house-blok.svg" alt="block" />
                        </Link>
                    </div>
                    <div className="card-p six">
                        <Link to="/">
                            <h2>vic vega</h2>
                            <img src="images/ux-house-blok.svg" alt="block" />
                        </Link>
                    </div>
                </div>

                <div className="projecten-page-cirkel">
                    <img src="images/ux-house-cirkel.svg" alt="cirkel" />
                </div>

                <div className="projecten-page-kruis">
                    <img src="images/ux-house-kruis.svg" alt="kruis" />
                </div>
            </div>
        </section>
    )
}
