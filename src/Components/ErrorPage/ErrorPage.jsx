import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-40 space-y-4">
            <h2 className="text-3xl">Oops Sorry! 404 Not found the page...</h2>
            <p className="text-xl">You can go back to home page.</p>
            <button className="btn btn-ghost bg-[#23BE0A] text-white"><Link to="/">Go to Home</Link></button>
        </div>
    );
};

export default ErrorPage;