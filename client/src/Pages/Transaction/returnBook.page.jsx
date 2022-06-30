import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../../config';

async function submit({ bookId, cardId }) {
    const { data } = await axios.post(
        `${BACKEND_URL}/returnBook?cardId=${cardId}&bookId=${bookId}`
    );
    console.log('datas submitted', data);
    return true;
}

export default function ReturnBook() {
    const navigate = useNavigate();

    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const [data, setData] = useState({
        bookId: '',
        cardId: '',
    });

    async function handleSubmit(e) {
        e.preventDefault();
        await submit(data);
        navigate('/');
    }

    return (
        <>
            <div className="p-4">
                <div className="flex items-center justify-center flex-col">
                    <h3>Return Book</h3>
                    <form className="w-2/3" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="student_name"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Book ID
                            </label>
                            <input
                                type="number"
                                name="bookId"
                                onChange={handleChange}
                                value={data.name}
                                id="student_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="10"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="stud_email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Card ID
                            </label>

                            <input
                                type="number"
                                name="cardId"
                                onChange={handleChange}
                                value={data.emailId}
                                id="stud_email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="11"
                                required
                            />
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
