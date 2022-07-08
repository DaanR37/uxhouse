import "./contracts.scss";

export default function Contracts() {
    return (
        <section id="contracts-page-container">
            <div className="contracts-page-background" style={{
                backgroundImage: "url(images/ux-house-achtergrond.png)"
            }}>
                <h1>
                    contracts
                </h1>

                <div className="ux-logo-upside-down">
                    <img src="images/ux-house-upside-down-reverse.svg" alt="logo upside down"></img>
                </div>

                <div className="contracts-tekst-container">
                    <p className="contracts-page-tekst">
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
                    <button className="button-aanvraag-contracts" data-tf-slider="G3ecsxbo" data-tf-width="550">
                        contact
                    </button>
                </div>

                <div className="contracts-page-cirkel">
                    <img src="images/ux-house-cirkel.svg" alt="cirkel" />
                </div>

                <div className="contracts-page-kruis">
                    <img src="images/ux-house-kruis.svg" alt="kruis" />
                </div>

            </div>
        </section>
    )
}
