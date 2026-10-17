import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){

    return(
        <>

            <Navbar />

            <Catalog />

            <Footer />

        </>
    );
}

export default App;