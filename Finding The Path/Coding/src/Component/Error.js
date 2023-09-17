import { useRouteError } from "react-router-dom";


const Error = () => {

    const err = useRouteError();

    return(
        <div className="error_page maxWidth">
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}

export default Error;