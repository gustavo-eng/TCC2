import { useRouteError } from "react-router-dom";

interface errorPageType {
    statusText?: string;
    status?: number;
    message?: string;
}

export default function ErrorPage() {
    const error: errorPageType | unknown = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );

}