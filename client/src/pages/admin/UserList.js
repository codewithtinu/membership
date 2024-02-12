import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const UserList = () => {
  const [users, setUser] = useState([
    {
      id: 1,
      admin: 'shambhu',
      username: 'gita_shinde',
      password: 'admin123',
      contactNo: '1234567890',
      address: '123 ThakareNagar',
      city: 'Nashik',
    },

    {
        id: 2,
        admin: 'nilesh',
        username: 'swaransh_shinde',
        password: 'shambhu@123',
        contactNo: '1234567890',
        address: '123 ThakareNagar',
        city: 'Nashik',
      },
      {
        id: 3,
        admin: 'nilesh',
        username: 'swaransh_shinde',
        password: 'shambhu@123',
        contactNo: '1234567890',
        address: '123 ThakareNagar',
        city: 'Nashik',
      },
      {
        id: 4,
        admin: 'nilesh',
        username: 'swaransh_shinde',
        password: 'shambhu@123',
        contactNo: '1234567890',
        address: '123 ThakareNagar',
        city: 'Nashik',
      },
      {
        id: 4,
        admin: 'nilesh',
        username: 'swaransh_shinde',
        password: 'shambhu@123',
        contactNo: '1234567890',
        address: '123 ThakareNagar',
        city: 'Nashik',
      },
      {
        id: 5,
        admin: 'nilesh',
        username: 'swaransh_shinde',
        password: 'shambhu@123',
        contactNo: '1234567890',
        address: '123 ThakareNagar',
        city: 'Nashik',
      },
      {
        id: 6,
        admin: 'nilesh',
        username: 'swaransh_shinde',
        password: 'shambhu@123',
        contactNo: '1234567890',
        address: '123 ThakareNagar',
        city: 'Nashik',
      },
    
  ]);

  const handleEdit = (id) => {
   console.log(`Editing user with id ${id}`)
  };

  const handleDelete = (id) => {
    console.log(`Deleting user with id ${id}`);
  };

  return (
    <div className="container mx-auto my-5">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Admin</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Password</th>
            <th className="py-2 px-4 border-b">Contact No</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">City</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>

        </thead>
        <tbody>

          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.admin}</td>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.password}</td>
              <td className="py-2 px-4 border-b">{user.contactNo}</td>
              <td className="py-2 px-4 border-b">{user.address}</td>
              <td className="py-2 px-4 border-b">{user.city}</td>
              <td className="py-2 px-4 border-b">

                <button
                  onClick={() => handleEdit(user.id)}
                  className="bg-blue-500 text-white px-2 py-1 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                    Delete
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-blue-700 text-white px-2 py-1"
                >
                    Submit
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default UserList;
