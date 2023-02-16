import React, { useState } from 'react';
import axios from 'axios';

export const usersContext = React.createContext();

const UsersContextProvider = ({ children }) => {
	const API = "http://localhost:8000/products"
	const [users, setUsers] = useState([]);
	const [oneUser, setOneUser] = useState(null);


	const getUsers = async () => {
		const res = await axios(API);
		setUsers(res.data);
	};
	async function createUser(newUser) {
		await axios.post(API, newUser);
		getUsers();
	}
	async function getOneUser(id) { 
		const res = await axios(`${API}/${id}`);
    setOneUser(res.data);
	}

	async function updateUser(id, editedUser) { 
		await axios.patch(`${API}/${id}`, editedUser);
    getUsers();
	}
	async function deleteUser(id) { 
    await axios.delete(`${API}/${id}`);
    getUsers();
  }

	return (
		<usersContext.Provider value={{
			users,
			oneUser,
			
			getOneUser,
      updateUser,
			getUsers,
			createUser,
			deleteUser
		}}>
			{children}
		</usersContext.Provider>
	);
}

export default UsersContextProvider;