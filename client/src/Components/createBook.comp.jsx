import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config';


const genres = [
  'FICTIONAL',
  'NON_FICTIONAL',
  'GEOGRAPHY',
  'HISTORY',
  'POLITICAL_SCIENCE',
  'BOTANY',
  'CHEMISTRY',
  'MATHEMATICS',
  'PHYSICS',
];

async function submitBook(payload) {
  const { data } = await axios.post(`${BACKEND_URL}/createBook`, payload);
  console.log('datas submitted', data);
  return true;
}

export default function CreateBookComp() {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    name: '',
    genre: 'FICTIONAL',
    author: authors[0] ?? null,
    available: true,
  });
  useEffect(() => {
    (async () => {
      // const { data } = await axios.get('http://192.168.29.94:8080/getAuthor');
      const { data } = await axios.get(`${BACKEND_URL}/getAuthor`);
      if (data) {
        const authorResponse = data.map((auth) => ({
          id: auth.id,
          name: auth.name,
          email: auth.email,
          age: auth.age,
          country: auth.country,
        }));
        setAuthors(authorResponse);
      }
      console.log('aut', authors);
    })();
  }, []);

  function handleChange(event) {
      console.log('evnet', event.target.value);
      // if (event.target.name === 'author')
      //   setBookData({
      //     ...bookData,
      //     [event.target.name]: authors[event.target.value],
      //   });
      // else
      setBookData({ ...bookData, [event.target.name]: event.target.value });
  }
  console.log('dasta', bookData);

  async function handleSubmit(event) {
      event.preventDefault();
      await submitBook(bookData);
      navigate('/');
  }

  return (
      <>
          <div className="p-4">
              <div className="flex items-center justify-center flex-col">
                  <h3>Create Book</h3>
                  <form className="w-2/3" onSubmit={handleSubmit}>
                      <div className="mb-6">
                          <label
                              htmlFor="book_name"
                              className="block mb-2 text-sm font-medium text-gray-900"
                          >
                              Book Name
                          </label>
                          <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              value={bookData.name}
                              id="book_name"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder="Harry Potter"
                              required=""
                          />
                      </div>
                      <div className="mb-6">
                          <label
                              htmlFor="genre"
                              className="block mb-2 text-sm font-medium text-gray-900"
                          >
                              Genre
                          </label>
                          <label
                              htmlFor="countries"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                          >
                              Select an option
                          </label>

                          <select
                              onChange={handleChange}
                              id="genres"
                              name="genre"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          >
                              {genres.map((genre) => (
                                  <option key={genre} value={genre}>
                                      {genre}
                                  </option>
                              ))}
                          </select>
                      </div>

                      <div className="mb-6">
                          <label
                              htmlFor="genre"
                              className="block mb-2 text-sm font-medium text-gray-900"
                          >
                              Author
                          </label>
                          <label
                              htmlFor="countries"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                          >
                              Select an option
                          </label>
                          <input
                              name="author"
                              onChange={handleChange}
                              id="author"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          />
                          {/* <select
                              name="author"
                              onChange={handleChange}
                              id="author"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          >
                              {authors &&
                                  authors.length &&
                                  authors.map((author, ind) => (
                                      <option key={author.id} value={ind}>
                                          {author.name}
                                      </option>
                                  ))}
                          </select> */}
                      </div>

                      <button
                          type="submit"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center      "
                      >
                          Submit
                      </button>
                  </form>
              </div>
          </div>
      </>
  );
}
