import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_BOOKS, DELETE_BOOK } from '../graphql/queries';

const BookList = () => {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
      <div>
          <h2>Book List</h2>
          <ul>
              {data.getAllBooks.map(book => (
                  <li key={book.id}>
                      <h3>{book.title}</h3>
                      <p>{book.author}</p>
                      <p>{book.description}</p>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default BookList;
