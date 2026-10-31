import { Link } from 'react-router';
import './Home.css';


import heroImage from "../assets/home-page.png";

function Home() {
    return (
        <div className="home">

            <section className="hero-section">

                <div className="hero-text">
                    <h1>Welcome</h1>

                    <p>
                        Explore our collection and find something you love.
                    </p>
                    <section className="page-links">
                        <Link to="/catalog">View Catalog</Link>
                        <Link to="/about">Learn About Us</Link>
                    </section>
                </div>

                <div className="hero-image">
                    <img src={heroImage} alt="Store collection" />
                </div>

            </section>
            <section className="home-features">

                 <div className="feature-card">
                    <h3>Quality</h3>
                    <p>Products selected with care.</p>
                 </div>

                 <div className="feature-card">
                    <h3>Simple</h3>
                    <p>Easy to browse and explore.</p>
                </div>

                <div className="feature-card">
                    <h3>Style</h3>
                    <p>Clean and modern design.</p>
                </div>

            </section>
          
        </div>
    );
}

export default Home;