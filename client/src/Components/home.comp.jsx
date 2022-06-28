import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from '../config';

async function getBooks() {
  const { data } = await axios.get(`${BACKEND_URL}/getBooks`);
  return data;
}

export default function HomeComp() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    (async () => {
      setBooks(await getBooks());
    })();
  }, []);
  return (
      <div className="p-4">
          <h3>Books</h3>
          <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                  <thead>
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Author Name</th>
                          <th>Genre</th>
                      </tr>
                  </thead>
                  <tbody>
                      {books &&
                          books.length &&
                          books
                              .filter((book) => book.author)
                              .map((book) => (
                                  <tr key={book.id}>
                                      <th>{book.id}</th>
                                      <td>{book.name}</td>
                                      <td>{book.author.name}</td>
                                      <td>{book.genre}</td>
                                  </tr>
                              ))}
                  </tbody>
              </table>
          </div>
      </div>
  );
}
