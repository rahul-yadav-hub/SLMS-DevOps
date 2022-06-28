import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../../config';

async function getStudents() {
    const { data } = await axios.get(`${BACKEND_URL}/getStudents`);
    return data;
}

async function deleteStudent(id) {
    await axios.delete(`${BACKEND_URL}/deleteStudent?id=${id}`);
}

export default function Student() {
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        (async () => {
            setData(await getStudents());
        })();
    }, [reload]);

    async function handleDelete(id) {
        await deleteStudent(id);
        toast.success('successfully deleted');
        setReload(!reload);
    }

    console.log('data', data);
    return (
        <>
            <div className="p-4">
                <h3>Books</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr className="items-center">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th className="flex justify-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                data.length &&
                                data
                                    .filter((student) => student.emailId)
                                    .map((student) => (
                                        <tr key={student.id}>
                                            <th>{student.id}</th>
                                            <td>{student.name}</td>
                                            <td>{student.age}</td>
                                            <td>{student.emailId}</td>
                                            <td className="flex justify-center gap-1">
                                                <Link
                                                    className="hover:bg-slate-300 rounded-lg"
                                                    state={student}
                                                    to={`update/${student.id}`}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="icon icon-tabler icon-tabler-edit"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="2"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                            fill="none"
                                                        ></path>
                                                        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                                        <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                                        <path d="M16 5l3 3"></path>
                                                    </svg>
                                                </Link>
                                                <button
                                                    className="hover:bg-slate-300 rounded-lg"
                                                    onClick={() =>
                                                        handleDelete(student.id)
                                                    }
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="icon icon-tabler icon-tabler-trash"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="2"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                            fill="none"
                                                        ></path>
                                                        <line
                                                            x1="4"
                                                            y1="7"
                                                            x2="20"
                                                            y2="7"
                                                        ></line>
                                                        <line
                                                            x1="10"
                                                            y1="11"
                                                            x2="10"
                                                            y2="17"
                                                        ></line>
                                                        <line
                                                            x1="14"
                                                            y1="11"
                                                            x2="14"
                                                            y2="17"
                                                        ></line>
                                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            {/* {books &&
                                books.length &&
                                books.map((book) => (
                                    <tr key={book.id}>
                                        <th>{book.id}</th>
                                        <td>{book.name}</td>
                                        <td>{book.author.name}</td>
                                        <td>{book.genre}</td>
                                    </tr>
                                ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
