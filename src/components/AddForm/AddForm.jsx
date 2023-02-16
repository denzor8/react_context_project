import React, { useContext, useState } from 'react'
import { usersContext } from '../../usersContext'
const AddForm = () => {
	const { createUser } = useContext(usersContext)

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [age, setAge] = useState('')

	function registerUser() {
		let newUser = {
			name,
			email,
			age
		}
		for (let key in newUser) {
			if (!newUser[key]) {
				alert('Net')
				return
			}
		}
		createUser(newUser)
		setName('')
		setEmail('')
		setAge('')
	}

	return (
		<>
			<input type="text" placeholder='' value={name} onChange={e => setName(e.target.value)} />
			<input type="text" placeholder='' value={email} onChange={e => setEmail(e.target.value)} />
			<input type="text" placeholder='' value={age} onChange={e => setAge(e.target.value)} />
			<button onClick={registerUser}>Register</button>
		</>
	)
}


export default AddForm