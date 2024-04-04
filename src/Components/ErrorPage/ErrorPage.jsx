import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h2>Ooops!!!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go Back where u from </p>
                    {/* <link rel="stylesheet" href="" /> */}
                    <Link to="/">
                            <button>Home</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;