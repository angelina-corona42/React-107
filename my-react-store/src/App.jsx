import { BrowserRouter, Routes, Route } from "react-router";

import GlobalProvider from "./state/globalProvider";

{
  /* PAGES */
}
import About from "./pages/About";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

{
  /* COMPONENTS */
}
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

{
  /* CSS */
}
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

{
  /* This is how to make a comment */
}

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />{" "}
          {/* Route allows you to define the page with the path in the url bar */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} /> {/* *= All the rest */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
