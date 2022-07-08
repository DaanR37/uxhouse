import { useState, useRef } from "react";
import Burger from "./Burger.js";
import Menu from "./Menu.js";
// import "./animations.scss";
import { GlobalStyles } from "./style.js";
import ClickToClose from "./ClickToClose";

function Navbar() {
    const ref = useRef();
    const [open, setOpen] = useState(false);
    ClickToClose(ref, () => setOpen(false));
    return (
        <div ref={ref}>
            <GlobalStyles />
            <div id="menu">
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </div>
    );
}

export default Navbar;
