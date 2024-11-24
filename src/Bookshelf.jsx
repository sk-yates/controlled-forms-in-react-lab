// --------------------------------- Imports ----------------------------------

import { useState } from 'react';

// -------------------------------- State/App logic ---------------------------------

const Bookshelf = () => {

    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: "", author: "" })



    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
        console.log(newBook);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({
            title: "",
            author: "",
        });
    };

    console.log(books);

    // -------------------------------- App Display ---------------------------------

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='title'> Title: </label>
                        <input
                            id="title"
                            name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='author'> Author: </label>
                        <input
                            id="author"
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit"> Add Book </button>

                </form>

            </div>


            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div className='bookCard' key={index}>
                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};


// ------------------------------- Main export --------------------------------

export default Bookshelf;