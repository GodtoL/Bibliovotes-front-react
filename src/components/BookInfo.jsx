import { CreateTags } from "./BookList";
import { useParams } from "react-router-dom";
import { useBooks } from "./BooksContext";
import { useState } from "react";

export default function BookInfo() {

  const { id } = useParams();
  const { books } = useBooks();
  const book = books.find((book) => book.id === parseInt(id, 10));
  const [comment, setComment] = useState({
    content: "",
    bookId: id,
    userId: 1
  });
  if (!book) {
    return <p>Libro no encontrado.</p>;
  }

  const commentsBook = book.comments;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComment((prevComment) => ({
      ...prevComment,
      [name]: value,
      bookId: book.id, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://bibliovotes-production.up.railway.app/api/comment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        }
      );
      if (response.ok) {
        console.log("Se agregó el comentario correctamente");
        // Limpia el campo del comentario
        setComment({ content: "", bookId: book.id });
      } else {
        console.log("Error al agregar comentario");
      }
    } catch (error) {
      console.error("Ocurrió algo en el servidor.");
    }
  };
  const handleVote = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://bibliovotes-production.up.railway.app/api/book/${id}`,
        {
          method: "PUT",

        }
      );
      if (response.ok) {
        console.log("Se voto correctamente");
      } else {
        console.log("Error al votar ");
      }
    } catch (error) {
      console.error("Ocurrió algo en el servidor.");
    }
  };

  return (
    <main>
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
      <p className="book-description">{book.description}</p>
      <ul className="book-tags">
        <CreateTags book={book} />
      </ul>
      <div className="votes-amount">
        <button onClick={handleVote} className="vote-button">Votar</button>
        <p className="amount-votes">{book.votesCount} votos</p>
      </div>
      <div id="comments-amount" className="comments-amount">
        <h3>Comentarios</h3>
        <p className="amount-comments">{book.comments.length}</p>
      </div>
      <form onSubmit={handleSubmit} className="comment-input-form">
        <input
          type="text"
          name="content"
          value={comment.content}
          onChange={handleInputChange}
          placeholder="¿Qué opinas?"
          required
        />
        <button type="submit" className="vote-button">
          Comentar
        </button>
      </form>
      <ul className="comments-list">
        {commentsBook.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.user.username}</h3>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
