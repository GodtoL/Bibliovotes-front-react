import React, { useEffect, useState } from "react";
import { useBooks } from './BooksContext';
import { tags } from "../tags";
import { Link } from 'react-router-dom';

export default function BookList() {
  const [selectedTags, setSelectedTags] = useState([]);

  const { books } = useBooks();
  const toggleTag = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag) // Quitar tag si ya está seleccionado
        : [...prevSelectedTags, tag] // Agregar tag si no está seleccionado
    );
  };

  const filteredBooks = books.filter(
    (book) =>
      selectedTags.length === 0 || // Mostrar todo si no hay tags seleccionados
      book.tags.some((tag) => selectedTags.includes(tag.name)) // Filtrar por tags seleccionados
  );

  return (

        <div className="tags-books">
          <div>
            <h2 className="filter-title">Filtrar por categorías:</h2>
            
            <div className="tags-list-main">       
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => toggleTag(tag.name)}
                  style={{
                    backgroundColor : selectedTags.includes(tag.name) ? "#3a5725" : "#6B8E23",
                    width : "6rem",
                    height : "3rem",
                    border : "none",
                    color : "#f9f9f9"
                  }}
                  className={selectedTags.includes(tag.name) ? "active" : ""}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>

          <div>
          <h1>Recomendaciones de nuestros usuarios</h1>
            {
            filteredBooks.length > 0 ? (
              <ul className="link-list">
                {filteredBooks.map((book) => (
                  <li key={book.id}>
                    <nav>
                      <Link to={`/book/${book.id}`}>{book.title}</Link>
                    </nav>
                    <p className="short-description">{book.shortDescription}</p>
                    <div className="votes">
                      <p>Votos:</p>
                      <p>{book.votesCount || 0}</p>
                      <p>Comentarios:</p>
                      <p>{book.comments?.length || 0}</p>
                    </div>
                    <ul className="tags-list">
                      <CreateTags book={book} />
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
               <h2>No hay nada para mostrar</h2>
            )
            }
          </div>
      </div>
);
}

export function CreateTags({ book }) {
  return (
    <>
      <li>🏷️</li>
      {book.tags.map((tag, index) => (
        <li key={index}>{tag.name}</li>
      ))}
    </>
  );
}
