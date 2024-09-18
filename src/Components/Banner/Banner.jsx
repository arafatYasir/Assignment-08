import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero bg-base-300 lg:h-[550px] mt-12 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-24 p-0">
                <img
                    src="https://i.postimg.cc/WzdSfVdw/pngwing-1-1.png"
                    className="max-w-sm rounded-lg w-2/3 mt-10 lg:mt-0" />
                <div>
                    <h1 className="text-6xl max-w-3xl font-bold text-center lg:text-left">Books to freshen up your bookshelf</h1>
                    <div className="text-center mb-10 lg:text-left lg:mb-0">
                        <Link to="/listed_books"><button className="btn btn-ghost mt-12 text-xl px-5 bg-[#23BE0A] text-white">View The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;