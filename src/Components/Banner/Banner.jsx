const Banner = () => {
    return (
        <div className="hero bg-base-300 h-[550px] mt-12 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse gap-24 p-0">
                <img
                    src="https://i.postimg.cc/V6yMN5X0/images-removebg-preview.png"
                    className="max-w-md rounded-lg w-2/3" />
                <div>
                    <h1 className="text-6xl max-w-3xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-ghost mt-12 text-xl px-5 bg-[#23BE0A] text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;