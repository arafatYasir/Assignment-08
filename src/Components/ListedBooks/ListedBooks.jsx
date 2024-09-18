import { useLoaderData } from "react-router-dom";
import { getBooks } from "../../Utility/localstorage";
import { useEffect, useState } from "react";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishListBooks from "../WishlistBooks/WishlistBooks";

// rect icons
import { MdKeyboardArrowDown } from "react-icons/md";

// styles
import "./ListedBooks.css"

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const readBookIds = getBooks("read");
    const wishlistBookIds = getBooks("wishlist");
    // finding already read and wishlisted books among all books
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
        if (allBooks.length > 0) {
            const booksReaded = allBooks.filter(book => readBookIds.includes(book.bookId))
            const booksWishlisted = allBooks.filter(book => wishlistBookIds.includes(book.bookId));

            setReadBooks(booksReaded);
            setWishlistBooks(booksWishlisted);
        }
    }, []);

    // using state to change tabs
    const [activeTab, setActiveTab] = useState(0);
    // changing active tab on click
    const handleTabChange = (value) => {
        setActiveTab(value);
    }

    // sorting function
    const handleSort = (name) => {
        if (activeTab == 0) {
            if (name === 'rating') {
                const temp = [...readBooks];

                for (let i = 0; i < temp.length - 1; i++) {
                    for (let j = 0; j < temp.length - i - 1; j++) {
                        if (temp[j].rating < temp[j + 1].rating) {
                            let t = temp[j];
                            temp[j] = temp[j + 1];
                            temp[j + 1] = t;
                        }
                    }
                }
                setReadBooks(temp);
            }
            else if (name === 'pages') {
                const temp = [...readBooks];

                for(let i = 0; i < temp.length - 1; i++) {
                    for(let j = 0; j < temp.length - i - 1; j++) {
                        if(temp[j].totalPages < temp[j + 1].totalPages) {
                            let t = temp[j];
                            temp[j] = temp[j + 1];
                            temp[j + 1] = t;
                        }
                    }
                }
                setReadBooks(temp);
            }
            else if(name === 'year') {
                const temp = [...readBooks];

                for(let i = 0; i < temp.length - 1; i++) {
                    for(let j = 0; j < temp.length - i - 1; j++) {
                        if(temp[j].yearOfPublishing < temp[j + 1].yearOfPublishing) {
                            let t = temp[j];
                            temp[j] = temp[j + 1];
                            temp[j + 1] = t;
                        }
                    }
                }
                setReadBooks(temp);
            }
        }
        else {
            if (name === 'rating') {
                const temp = [...wishlistBooks];

                for (let i = 0; i < temp.length - 1; i++) {
                    for (let j = 0; j < temp.length - i - 1; j++) {
                        if (temp[j].rating < temp[j + 1].rating) {
                            let t = temp[j];
                            temp[j] = temp[j + 1];
                            temp[j + 1] = t;
                        }
                    }
                }
                setWishlistBooks(temp);
            }
            else if (name === 'pages') {
                const temp = [...wishlistBooks];

                for(let i = 0; i < temp.length - 1; i++) {
                    for(let j = 0; j < temp.length - i - 1; j++) {
                        if(temp[j].totalPages < temp[j + 1].totalPages) {
                            let t = temp[j];
                            temp[j] = temp[j + 1];
                            temp[j + 1] = t;
                        }
                    }
                }
                setWishlistBooks(temp);
            }
            else if(name === 'year') {
                const temp = [...wishlistBooks];

                for(let i = 0; i < temp.length - 1; i++) {
                    for(let j = 0; j < temp.length - i - 1; j++) {
                        if(temp[j].yearOfPublishing < temp[j + 1].yearOfPublishing) {
                            let t = temp[j];
                            temp[j] = temp[j + 1];
                            temp[j + 1] = t;
                        }
                    }
                }
                setWishlistBooks(temp);
            }
        }

    }

    return (
        <div className="tabs-container">
            {/* Heading & title */}
            <h1 className="text-center font-bold text-3xl mt-16">Books</h1>
            <p className="text-xl text-center mt-4 font-medium">Here, you can find all of your books you added to the list. Feel free to add more on future. You can also sort them as you want.</p>

            {/* Sort By */}
            <div className="text-center mt-16 mb-14">
                <details className="dropdown">
                    <summary className="btn m-1 bg-[#23BE0A] text-white px-7 font-semibold text-lg md:text-xl">Sort By <span className="text-2xl"><MdKeyboardArrowDown /></span></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleSort("rating")}><a>Rating</a></li>
                        <li onClick={() => handleSort("pages")}><a>Pages</a></li>
                        <li onClick={() => handleSort("year")}><a>Published Year</a></li>
                    </ul>
                </details>
            </div>

            {/* Tabs */}
            <div className="listed-books-tabs">
                <div className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabChange(0)}>Read Books</div>
                <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabChange(1)}>Wishlist Books</div>
            </div>

            {/* Content of tabs */}
            <div className="tabs-content">
                {activeTab === 0 && (
                    readBooks.map(book => <ReadBooks book={book} key={book.bookId}></ReadBooks>)
                )}

                {activeTab === 1 && (
                    wishlistBooks.map(book => <WishListBooks book={book} key={book.bookId}></WishListBooks>)
                )}
            </div>
        </div>
    );
};

export default ListedBooks;