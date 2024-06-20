import { gql } from '@apollo/client';

export const GET_ALL_BOOKS = gql`
  query GetAllBooks {
    getAllBooks {
      id
      title
      author
      description
    }
  }
`;

export const EDIT_BOOK_BY_ID = gql`
  mutation EditBook($id: ID!, $title: String, $author: String, $description: String) {
    editBook(id: $id, title: $title, author: $author, description: $description) {
      id
      title
      author
      description
    }
  }
`
;
