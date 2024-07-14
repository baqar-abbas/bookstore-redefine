/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types'

const BookList = ({books}) => {
  return (
    <section className='book-wrap'>
        {books.map(book => (
            <div key={book.id} className="book" >
                <h2>{book.title}</h2>
                <p>{book.author}</p>
            <div>
            <button type='button' className='remove'>Delete</button>
            </div>
            </div>
        ))}
    </section>
  )
}

export default BookList;

BookList.propTypes = {
    // books: PropTypes.array.isRequired
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }),
    ).isRequired,
}

