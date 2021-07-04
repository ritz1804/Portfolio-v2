import About from "./components/about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Work from "./components/work";
import Outro from "./components/outro";
import Status from "./components/status";
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