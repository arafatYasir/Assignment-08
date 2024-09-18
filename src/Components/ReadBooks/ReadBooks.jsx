// react icons
import { HiOutlineClock } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ReadBooks = ({ book }) => {
    const {bookId, bookName, author, book_image, tags, publisher, yearOfPublishing, totalPages, category, rating } = book;
    return (
        <div className="border rounded-lg p-6 flex flex-col lg:flex-row gap-6 mb-6">
            {/* Image */}
            <div className="px-12 py-7 bg-[#1313131f] min-w-52 rounded-2xl">
                <img className="w-52 mx-auto" src={book_image} alt="" />
            </div>
            {/* Contents */}
            <div className="w-full">
                <h1 className="text-2xl font-bold mb-4">{bookName}</h1>
                <p className="text-lg font-medium mb-4">By: {author}</p>

                {/* Tags */}
                <div className='flex gap-4 mt-6 mb-6 items-center '>
                    <span className='text-lg font-bold'>Tag</span>
                    <span className='bg-[#13131314] rounded-full px-2 text-[#23BE0A]'>#{tags[0]}</span>
                    <span className='bg-[#13131314] rounded-full px-2 text-[#23BE0A]'>#{tags[1]}</span>
                    <span className='bg-[#13131314] rounded-full px-2 text-[#23BE0A]'>#{tags[2]}</span>
                </div>

                <div className="flex items-center gap-2 font-medium mb-4"><span className="text-xl"><HiOutlineClock /></span>Year of Publishing: {yearOfPublishing}</div>

                {/* Publisher and Pages */}
                <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-2 font-medium"><span className="text-xl"><GoPeople /></span>Publisher: {publisher}</div>
                    <div className="flex items-center gap-2 font-medium"><span className="text-xl"><MdOutlineContactPage /></span>Page {totalPages}</div>
                </div>

                <hr />

                {/* button and others */}
                <div className="flex mt-4 gap-3">
                    <div className='bg-[#328eff20] text-lg md:text-xl rounded-full px-5 py-2 text-[#328EFF]'>Category: {category}</div>
                    <div className='bg-[#ffad3320] text-lg md:text-xl rounded-full px-5 py-2 text-[#FFAC33]'>Rating: {rating}</div>
                    <Link to={`/books/${bookId}`}>
                        <button className="text-white text-lg md:text-xl bg-[#23BE0A] px-5 py-2 rounded-full">View Details</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ReadBooks;