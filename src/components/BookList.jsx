import React, { useState } from "react";
import { books } from "../bd";
import { tags } from "../tags";

export default function BookList() {
  const [selectedTags, setSelectedTags] = useState([]);

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
            {filteredBooks.length > 0 ? (
              <ul className="link-list">
                {filteredBooks.map((book) => (
                  <li key={book.id}>
                    <a href="#">{book.title}</a>
                    <p className="short-description">{book.shortDescription}</p>
                    <div className="votes">
                      <p>Votos:</p>
                      <p>{book.votesCount || 0}</p>
                      <p>Comentarios:</p>
                      <p>{book.comments?.length || 0}</p>
                    </div>
                    <ul className="tags-list">
                      <li>🏷️</li>
                      <CreateTags book={book} />
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <h2>No hay nada para mostrar</h2>
            )}
          </div>
      </div>
  );
}

function CreateTags({ book }) {
  return (
    <>
      {book.tags.map((tag, index) => (
        <li key={index}>{tag.name}</li>
      ))}
    </>
  );
}
