import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Contracts from "./components/Services/Contracts/Contracts";
import Interim from "./components/Services/Interim/Interim";
import Permanent from "./components/Services/Permanent/Permanent";
import Services from "./components/Services/Services";
import Vacatures from "./components/Vacaturesenprojecten/Vacatures/Vacatures";
import Vacaturesenprojecten from "./components/Vacaturesenprojecten/Vacaturesenprojecten";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/permanent" element={<Permanent />} />
        <Route path="/interim" element={<Interim />} />
        <Route path="/vacaturesenprojecten" element={<Vacaturesenprojecten />} />
        <Route path="/vacatures" element={<Vacatures />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
