import React, { useState, useEffect } from 'react';
import {books} from './bd';

export default function BookList() {

  return (
    <div>
      <h1> Recomendaciones de nuestros usuarios</h1>
      <ul className='link-list'>
        {books.map(book => (
          <li key={book.id}>
            <a href=""> {book.title}</a>
            <p className='short-description'> {book.shortDescription}</p>
            <div className='votes'> 
              <p>Votos: </p>
              <p> {book.votesCount}</p>
              <p> Comentarios: </p>
              <p> {book.comments.length}</p>
            </div>
            <ul className='tags-list'>
              <li> 🏷️</li>
              <CreateTags book={book}/>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
function CreateTags({book}){
  return(
    <>
      {book.tags.map(tag => (
        <li> {tag.name}</li>
      ))}
    </>
  )
}