import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usersContext } from '../../usersContext'
const UsersList = () => {
	const { getUsers, users } = useContext(usersContext)
	const navigate = useNavigate()

	useEffect(() => {
		getUsers()
	}, [])

	return (
		<div>
			{users.map(item => (
				<div key={item.id} style={{ margin: '10px' }}>
					name: {item.name};
					email: {item.email};
					Age: {item.age};
					<button>Delete</button>
					<button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
					<button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
				</div>
			))}
		</div>
	)
}



export default UsersList