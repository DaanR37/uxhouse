import "./permanent.scss";

export default function Permanent() {
    return (
        <section id="permanent-page-container">
            <div className="permanent-page-background" style={{
                backgroundImage: "url(images/ux-house-achtergrond.png)"
            }}>
                <h1>
                    permanent
                </h1>

                <div className="ux-logo-upside-down-permanent">
                    <img src="images/ux-house-upside-down-reverse.svg" alt="logo upside down"></img>
                </div>

                <div className="permanent-tekst-container">
                    <p className="permanent-page-tekst">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam sed libero sit amet magna posuere cursus vitae quis velit.
                        Proin et aliquet felis. Donec lacinia consectetur mattis.
                        Maecenas convallis ac sem id lacinia. Mauris convallis mauris
                        purus.
                        Praesent luctus, arcu non mollis suscipit, ligula arcu iaculis mauris,
                        ac condimentum
                        <br></br>
                        felis ex eu nisi. Phasellus luctus nisi eu velit
                        dictum rutrum. Proin tincidunt vitae leo et aliquam. Morbi porttitor
                        massa urna, vitae bibendum magna accumsan ac. Nunc sit amet tristique velit.
                        Vestibulum sit amet urna neque.
                    </p>
                    <button className="button-aanvraag-permanent" data-tf-slider="G3ecsxbo" data-tf-width="550">
                        contact
                    </button>
                </div>

                <div className="permanent-page-cirkel">
                    <img src="images/ux-house-cirkel.svg" alt="cirkel" />
                </div>

                <div className="permanent-page-kruis">
                    <img src="images/ux-house-kruis.svg" alt="kruis" />
                </div>
            </div>
        </section>
    )
}
