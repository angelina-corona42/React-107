import "./About.css";


function About() {
  

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Welcome to Cozy Cart! We created this store to make shopping feel simple, comfortable, and enjoyable. Our catalog includes a mix of home items, clothing, accessories, and electronics, with something for everyone.
        </p>
        <p>
          Our goal is to create an easy shopping experience where customers can browse products, find what they like, and keep everything organized in one place. Cozy Cart is all about keeping things simple while still making the experience feel warm and welcoming.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Story</h2>

          <p>
            Our store was created to bring together products that are useful,
            stylish, and easy to discover.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>

          <p>
            Our mission is to create a simple shopping experience while
            providing products that customers can enjoy.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Values</h2>

          <p>
            We value quality, simplicity, and creating a positive experience for
            our customers.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
