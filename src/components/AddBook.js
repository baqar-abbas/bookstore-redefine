/* eslint-disable */
import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddBook = ({addNewBook}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim() && author.trim()) {
            addNewBook(title, author);
            setTitle('');
            setAuthor('');
        }
    };
  return (
    <div className="form-wrap" >
      <form onSubmit={handleSubmit} className="form-container" >
        <label htmlFor="title">
        Add New Book
        <input
        type='text'
        id='title'
        className='title'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        </label>
        <input
        type='text'
        className="author author-detail"
        placeholder='Author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddBook;

AddBook.propTypes = {
    addNewBook: PropTypes.func.isRequired
}
