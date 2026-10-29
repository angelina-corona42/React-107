import './NotFound.css';

function NotFound(){
    return(
        <div className="not-found-page">

            <div className="not-found-content">

                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>
                    Sorry, the page you are looking for does not exist.
                </p>

                <button>
                    Go Back Home
                </button>

            </div>

        </div>
    )   
}

export default NotFound