import { useLoaderData } from "react-router-dom";
import { getBooks } from "../../Utility/localstorage";
import { useState } from "react";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishListBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const readBookIds = getBooks("read");
    const wishlistBookIds = getBooks("wishlist");
    // finding already read and wishlisted books among all books
    const readBooks = allBooks.filter(book => readBookIds.includes(book.bookId));
    const wishlistBooks = allBooks.filter(book => wishlistBookIds.includes(book.bookId));

    // using state to change tabs
    const [activeTab, setActiveTab] = useState(0);
    // changing active tab on click
    const handleTabChange = (value) => {
        setActiveTab(value);
    }

    return (
        <div className="tabs-container">
            {/* Tabs */}
            <div className="tabs">
                <div className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabChange(0)}>Read Books</div>
                <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabChange(1)}>Wishlist Books</div>
            </div>

            {/* Content of tabs */}
            <div className="tabs-content">
                {activeTab === 0 && (
                    readBooks.map(book => <ReadBooks book={book}></ReadBooks>)
                )}

                {activeTab === 1 && (
                    wishlistBooks.map(book => <WishListBooks book={book}></WishListBooks>)
                )}
            </div>
        </div>
    );
};

export default ListedBooks;