import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("books.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    }, []);
    return (
        <div>
            <h2 className="text-center text-4xl font-bold mt-24 mb-9">Books: {books.length}</h2>
            <div>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;