import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './Add_Edit_Delete.css';
import close_img from '../images/cross_close_img.svg';

const Add_Edit_Delete = () => {

  const [books, setbooks] = useState();

  //Fetch to fix unknown constant render error. Take no/chances
  const [booksfetched, setbooksfetched] = useState(false);

    useEffect(() => {
        if (!booksfetched) {
            fetch("http://localhost:8082/books")
            .then(response => response.json())
            .then(data => {
            setbooks(data);
            setbooksfetched(true);
            })
            .catch(err => {
            console.error(err.message);
            });
        }
    }, [booksfetched]);

    if (!books) {
        return null;
    }

    const Add = () => {
        const [book, setbook] = useState({
            id: 0,
            title: '',
            image_path: '',
            description: '',
            cost: 0,
            available: 0,
        });
  
        const handleInput = (e) => {
            const { name, value } = e.target;
            setbook((prevbook) => ({
                 ...prevbook, [name]: value }));
        };
  
        const handleAdd = () => {
            fetch('http://localhost:8082/books', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);         
            })
            .catch((error) => {
                console.error('Error adding book:', error);
            });
        };
            return (

                <div>
                    <h2>Add Book</h2>
                {/* <div>

                <div>Book ID:</div>
                    <input type="number" name="id" value={book.id} onChange={handleInput} />
                </div> */}
                <div>
                <div>Title:</div>
                    <input type="text" name="title" value={book.title} onChange={handleInput} />
                </div>
                {/* <div>
                <div>Image Path:</div>
                    <input type="text" name="image_path" value={book.image_path} onChange={handleInput} />
                </div> */}
                <div>
                <div>Description:</div>
                    <input type="text" name="description" value={book.description} onChange={handleInput} />
                </div>
                <div>
                <div>Cost:</div>
                    <input type="number" name="cost" value={book.cost} onChange={handleInput} />
                </div>
                <div>
                <div>Available:</div>
                    <input type="number" name="available" value={book.available} onChange={handleInput} />
                </div>

            <button id='add_book' onClick={handleAdd}>Add New Book</button>

        </div>
    );
};    

    const Edit = () => {

        const [title, settitle] = useState('');
        const [newdescription, setnewdescription] = useState('');
  
        const EditBook = () => {
            fetch('http://localhost:8082/books', {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: title, description: newdescription }),
                })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);          
                })
            .catch((error) => {
                console.error('Error updating book description:', error);
            });
        };
            return (
                <div>
                    <h2>Edit Book Description</h2>
                <div>
                    <div>Book Title:</div>
                        <input type="text" value={title} onChange={(e) => settitle(e.target.value)} />
                </div>
                <div>
                    <div>Edit Description:</div>
                        <input type="text" value={newdescription} onChange={(e) => setnewdescription(e.target.value)} />
                </div>

                <button id='edit_book' onClick={EditBook}>Update Book Description</button>

                </div>
            );
    };
    const Delete = () => {

        const [title, settitle] = useState('');
      
        const DeleteBook = () => {
            fetch('http://localhost:8082/books', {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: title }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);
              // Perform any necessary actions after deleting the book
            })
            .catch((error) => {
                console.error('Error deleting book:', error);
            });
        };
            return (
                <div>
                    <h2>Delete Book</h2>
                <div>
                    <div>Book Title:</div>
                        <input type="text" value={title} onChange={(e) => settitle(e.target.value)} />
                </div> 

                    <button id='delete_book' onClick={DeleteBook}>Delete Book</button>

                </div>
          );
        };


  return (
    <div className='Admin_body'>
      <div id='center_piece'>
            <Link to='/admin_home' id="return_admin_home_link">
                <p className='return_admin_home'>
                    <span className="icon-wrapper_x">
                        <img id="close_image" src= {close_img} alt="close_img" />
                    </span>
                </p>
            </Link>
        <div className="book_container">
          <div id='book_container_title'>
            <p>Your Current Inventory</p>
          </div>
          {books.map(book => (
            <div key={book.id} className="book_entry">
              {/* <img src={book.image_path} alt={book.title} className="book-image" /> */}
              <h2 className="book_title">{book.title}</h2>
              <p className="book_description">{book.description}</p>
              <p className="book_details">Cost: ${book.cost} | Available: {book.available}</p>
            </div>
          ))}
        </div>
        <Add />
        <Edit />
        <Delete />
      </div>
    </div>
  );
};

export default Add_Edit_Delete;
