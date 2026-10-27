import { BrowserRouter, Routes, Route } from "react-router";

{/* PAGES */}
import About from './pages/About';
import Catalog from "./pages/Catalog";
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";

{/* COMPONENTS */}
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

{/* CSS */}
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

{/* This is how to make a comment */}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route />
        <Route path="/about" element={<About />} /> {/* Route allows you to define the page with the path in the url bar */}
        <Route path="/contact" element={<Contact />}/>
        <Route path="/catalog" element={<Catalog />}/>
        <Route path="*" element={<NotFound />}/> {/* *= All the rest */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
