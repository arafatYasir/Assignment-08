const getBooks = (name) => {
    const storedBooks = localStorage.getItem(name);
    if(storedBooks) {
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveBooks = (name, id) => {
    const storedBooks = getBooks(name);
    const exist = storedBooks.find(bookId => bookId === id);

    if(!exist) {
        storedBooks.push(id);
        localStorage.setItem(name, JSON.stringify(storedBooks));
    }
}

export {getBooks, saveBooks}