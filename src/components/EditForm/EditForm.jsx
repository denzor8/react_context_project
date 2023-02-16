import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { usersContext } from '../../usersContext'
const EditForm = () => {
	const { getOneUser, oneUser, updateUser } = useContext(usersContext)

	const { id } = useParams()
	const navigate = useNavigate()


	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [age, setAge] = useState('')

	useEffect(() => {
    getOneUser(id)
	}, [])
	
	useEffect(() => { 
		if (oneUser) {
      setName(oneUser.name)
      setEmail(oneUser.email)
      setAge(oneUser.age)
    }
	}, [oneUser])
	
	function saveChanges() {
		let editedUser = {
			name: name,
			email: email,
			age: age
		}
		updateUser(id, editedUser)
		navigate('/users')
	}

	return oneUser ? (
		<>
			<input type="text" placeholder='' value={name} onChange={e => setName(e.target.value)} />
			<input type="text" placeholder='' value={email} onChange={e => setEmail(e.target.value)} />
			<input type="text" placeholder='' value={age} onChange={e => setAge(e.target.value)} />
			<button onClick={saveChanges}>save</button>
		</>
	) : (
		<h2>Loading ...</h2>
	)
}

export default EditForm