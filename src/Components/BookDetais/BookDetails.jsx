import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
    const book = books.find(book => book.bookId === bookId);
    const { bookName, author, book_image, rating, tags, category, review, totalPages, publisher, yearOfPublishing } = book;

    return (
        <div className='mt-14 flex items-center gap-20'>
            {/* image container */}
            <div>
                <img className='rounded-3xl md:min-w-[490px]' src={book_image} alt="" />
            </div>
            {/* details container */}
            <div>
                <h1 className="text-5xl font-bold mb-4">{bookName}</h1>
                <h3 className="text-2xl font-medium mb-6">By: {author}</h3>
                <hr />
                <h3 className="text-2xl font-medium mt-6 mb-6">{category}</h3>
                <hr />
                <p className='text-lg'><span className='font-bold'>Review:</span> {review}</p>

                <div className='flex gap-4 mt-6 mb-6'>
                    <span className='text-lg font-bold'>Tag</span>
                    <span className='bg-[#13131314] rounded-full px-2 text-[#23BE0A]'>{tags[0]}</span>
                    <span className='bg-[#13131314] rounded-full px-2 text-[#23BE0A]'>{tags[1]}</span>
                    <span className='bg-[#13131314] rounded-full px-2 text-[#23BE0A]'>{tags[2]}</span>
                </div>
                <hr />

                <div className='flex gap-20 text-lg mt-6 mb-8'>
                    <div className='space-y-3'>
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className='font-bold space-y-3'>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>

                <button className='border border-black px-6 py-4 rounded-lg text-xl font-bold hover:bg-[#23BE0A] hover:border-none'>Read</button>
                <button className='ml-5 btn-ghost px-6 py-4 rounded-lg text-xl font-bold text-white bg-[#50B1C9]'>Wishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;