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
          </li>
        ))}
      </ul>
    </div>
  );
}

