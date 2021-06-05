import About from "./components/about";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Work from "./components/work";
import Outro from "./components/outro";
import Status from "./components/status";
import Scroll from "./components/scroll";

function App() {
    return (
        <div>
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