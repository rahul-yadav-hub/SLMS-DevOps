import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../../config';

async function submitStudent(payload, id) {
    const { data } = await axios.put(`${BACKEND_URL}/updateStudent`, payload);
    console.log('datas submitted', data);
    return true;
}

export default function UpdateStudent() {
    const navigate = useNavigate();
    const { state } = useLocation();
    console.log('navigate', state);

    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const [data, setData] = useState(state);

    async function handleSubmit(e) {
        e.preventDefault();
        await submitStudent(data, state.id);
        navigate('/student');
    }

    return (
        <>
            <div className="p-4">
                <div className="flex items-center justify-center flex-col">
                    <h3>Add Student</h3>
                    <form className="w-2/3" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="student_name"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Student Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={data.name}
                                id="student_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="Brian Weils"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="stud_email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Student Email
                            </label>

                            <input
                                type="email"
                                name="emailId"
                                onChange={handleChange}
                                value={data.emailId}
                                id="stud_email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="abc@gmail.com"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="stud_age"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                student Age
                            </label>

                            <input
                                type="number"
                                name="age"
                                onChange={handleChange}
                                value={data.age}
                                id="stud_age"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="18"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="stud_country"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Country
                            </label>

                            <input
                                type="text"
                                name="country"
                                onChange={handleChange}
                                value={data.country}
                                id="stud_country"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder="India"
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
