import React, { useState } from 'react';

const PostForm = ({tags}) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    shortDescription: '',
    description: '',
    tags: ''
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://bibliovotes-production.up.railway.app/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log("Se agregó correctamente");
      } else {
        console.log("Error al agregar");
      }
    } catch (error) {
      console.error('Ocurrió algo en el servidor.');
    }
  };

  const CreateBookLabel = ({ propName }) => (
    <label>
      {propName}:
      <input
        type="text"
        name={propName.toLowerCase()}
        value={formData[propName.toLowerCase()]}
        onChange={handleChange}
        required
      />
    </label>
  );

  return (
    <>
      <button className="create-button" onClick={toggleFormVisibility}>
        {isFormVisible ? "Ocultar" : "Agregar recomendación"}
      </button>
      {isFormVisible && (
        <form className="book-create-form" onSubmit={handleSubmit}>
          <CreateBookLabel propName="title" />
          <CreateBookLabel propName="author" />
          <CreateBookLabel propName="shortDescription" />
          <label>
            Sinopsis:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label>
            Etiqueta:
            <select
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                required
            >
                <option value="" disabled>
                Selecciona un tag
                </option>
                {tags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                    {tag.name}
                </option>
                ))}
            </select>
            </label>

          <button type="submit">Crear Recomendación</button>
        </form>
      )}
    </>
  );

};

export default PostForm;
