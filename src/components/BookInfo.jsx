import {CreateTags} from './BookList';
import { useParams } from 'react-router-dom';
import { useBooks } from './BooksContext';

export default function BookInfo () {
    const { id } = useParams();
    console.log("id es ",id);
    const { books } = useBooks();
    const book = books.find(book => book.id === parseInt(id, 10));
    console.log(book);
    const commentsBook = book.comments;
  return (
    <main>
        <h1> {book.title}</h1>
        <h3 > {book.author}</h3>
        <p className="book-description" > {book.description}</p>
        <ul className="book-tags" >
            <CreateTags book={book}/>
        </ul>
        <div className="votes-amount">
            <button className="vote-button" >
            Votar
            </button>
            <li className="amount-votes"> {book.votesCount} </li>
            <p> votos</p>
        </div>
        <div id="comments-amount" className="comments-amount">
            <h3> Comentarios</h3>
            <li  className="amount-comments" >{book.comments.length} </li>
        </div>
        <form action="submit" className="comment-input-form" id="comment-input-form">
            <input
            type="text"
            placeholder="¿Qué opinas?"
            required=""
            />
            <button className="vote-button" >
            Comentar
            </button>
        </form>
        <ul className="comments-list">
            {commentsBook.map((comment, index) => (
                <li key={index}>
                    <h3>{comment.user.username}</h3>
                    <p>{comment.content}</p>
                </li>
                ))}

        </ul>
    </main>

  )
}
