import { Link } from "react-router";
import "./NotFound.css";
import { IconGhost3 } from "@tabler/icons-react";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <IconGhost3 stroke={2} size={100} color="#6b4f3a" />
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>Sorry, the page you are looking for does not exist.</p>

        <section className="page-links">
          <Link to="/home">Go Back Home</Link>
        </section>
      </div>
    </div>
  );
}

export default NotFound;
