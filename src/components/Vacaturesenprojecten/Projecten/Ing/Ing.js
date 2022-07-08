import "./ing.scss";

export default function Ing() {
    return (
        <section id="ing-container">
            <div className="ing-page-background" style={{
                backgroundImage: "url(images/ux-house-achtergrond.png)"
            }}>
                <h1>
                    projecten
                </h1>

                <div className="ing-card">
                    <h2>ing</h2>
                    <img src="images/ux-house-blok-light.svg" alt="ing card" />
                </div>

                <div className="ing-tekst-container">
                    <p className="ing-page-tekst">
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
                    <button className="button-aanvraag-ing" data-tf-slider="G3ecsxbo" data-tf-width="550">
                        contact
                    </button>
                </div>

                <div className="ing-page-cirkel">
                    <img src="images/ux-house-cirkel.svg" alt="cirkel" />
                </div>

                <div className="ing-page-kruis">
                    <img src="images/ux-house-kruis.svg" alt="kruis" />
                </div>

            </div>
        </section>
    )
}
