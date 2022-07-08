import "./teamleadux.scss";

export default function Teamleadux() {
    return (
        <section id="teamleadux-container">
            <div className="teamleadux-page-background" style={{
                backgroundImage: "url(images/ux-house-achtergrond.png)"
            }}>
                <h1>
                    vacatures
                </h1>

                <div className="teamleadux-card">
                    <h2>team lead ux</h2>
                    <img src="images/ux-house-blok-light.svg" alt="team lead card" />
                </div>

                <div className="teamleadux-tekst-container">
                    <p className="teamleadux-page-tekst">
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
                    <button className="button-aanvraag-teamleadux" data-tf-slider="G3ecsxbo" data-tf-width="550">
                        contact
                    </button>
                </div>

                <div className="teamleadux-page-cirkel">
                    <img src="images/ux-house-cirkel.svg" alt="cirkel" />
                </div>

                <div className="teamleadux-page-kruis">
                    <img src="images/ux-house-kruis.svg" alt="kruis" />
                </div>

            </div>
        </section>
    )
}
