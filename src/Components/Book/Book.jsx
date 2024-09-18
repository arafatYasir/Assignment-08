import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
    const { bookName, author, book_image, rating, tags, category, bookId } = book;
    return (
            <Link to={`/books/${bookId}`} className="border w-96 p-6 rounded-xl mx-auto">
                {/* Image */}
                <div className="px-24 py-8 bg-[#13131324] rounded-xl">
                    <img src={book_image} className="w-36 mx-auto" alt="" />
                </div>
                {/* Information */}
                <div className="mt-6">
                    <p className="flex gap-5 text-[#23BE0A] font-medium items-center">
                        <span className="bg-[#13131314] rounded-full px-2">{tags[0]}</span>
                        <span className="bg-[#13131314] rounded-full px-2">{tags[1]}</span>
                        <span className="bg-[#13131314] rounded-full px-2">{tags[2]}</span>
                    </p>
                    <h2 className="text-2xl font-semibold mt-4">{bookName}</h2>
                    <p className="font-medium mt-4 mb-5">By: {author}</p>
                    <hr className="border-dashed" />
                    <div className="font-semibold mt-5 flex justify-between items-center">
                        <p>{category}</p>
                        <p className="flex items-center font-medium gap-2">{rating} <span className="text-xl "><FaRegStar></FaRegStar></span></p>
                    </div>
                </div>
            </Link>
    );
};

export default Book;