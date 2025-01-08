import { createContext, useState, useEffect, useContext } from 'react';

const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch("https://bibliovotes-production.up.railway.app/api/book");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error al intentar el fetch", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const value = {
    books,
    setBooks,
    fetchBooks, // Por si necesitas refrescar los datos
  };

  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BooksContext);
  if (context === undefined) {
    throw new Error('useBooks debe usarse dentro de un BooksProvider');
  }
  return context;
}