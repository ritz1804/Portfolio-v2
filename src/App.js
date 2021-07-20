import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import Work from "./components/Work/work";
import Outro from "./components/Outro/outro";
import Status from "./components/Status/status";
import Scroll from "./components/scroll";
import { CustomCursor } from "./components/customCursor";

function App() {
    return (
        <div>
            <CustomCursor />
            <Scroll />
            <Navbar />
            <About />
            <Work />
            <Status />
            <Outro />
            <Footer />
        </div>
    );
}

export default App;