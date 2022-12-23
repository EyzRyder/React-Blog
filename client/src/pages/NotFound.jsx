import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2 className="text-3xl text-primary-100 mb-8">Error 404 - Sorry</h2>
            <p className="m-2">Page not found</p>
            <Link to='/' className="bg-primary-100 text-[#fff] border-none border-0 p-2 rounded-lg cursor-pointer">Back to Home page</Link>
        </div>
    );
}

export default NotFound;