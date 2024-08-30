import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState({ id: '', name: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const updateUser = async (id) => {
        try {
            await axios.put(`https://fakestoreapi.com/products/${id}`, editUser);
            fetchUsers();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const resp =await axios.delete(`https://fakestoreapi.com/products/${id}`);
            console.log('Delete response:', resp);
            setUsers(resp.data);
            // fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleEditChange = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.category}
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                        <button onClick={() => setEditUser(user)}>Edit</button>
                    </li>
                ))}
            </ul>
            {editUser.id && (
                <div>
                    <h2>Edit User</h2>
                    <input
                        type="text"
                        name="name"
                        value={editUser.name}
                        onChange={handleEditChange}
                    />
                    <button onClick={() => updateUser(editUser.id)}>Update</button>
                </div>
            )}
        </div>
    );
};

export default Api;