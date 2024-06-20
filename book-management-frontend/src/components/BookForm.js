import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BOOK, EDIT_BOOK } from '../graphql/queries';

const BookForm = ({ book, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    author: '',
    description: '',
  });

  const [addBook] = useMutation(ADD_BOOK);
  const [editBook] = useMutation(EDIT_BOOK);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (book) {
      setFormData(book);
    } else {
      setFormData({
        id: '',
        title: '',
        author: '',
        description: '',
      });
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
        await editBook({ variables: formData });
    } else {
        await addBook({ variables: formData });
    }
    setFormData({ id: '', title: '', author: '', description: '' });
    navigate('/');
};

return (
  <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
      />
      <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
      />
      <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
      />
      <button type="submit">Submit</button>
  </form>
);

};

export default BookForm;
