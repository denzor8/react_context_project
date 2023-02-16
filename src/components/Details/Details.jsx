import React, { useState, useEffect, useContext } from 'react'
import { Spinner } from 'react-bootstrap';
import { usersContext } from '../../usersContext'
import { useParams } from 'react-router-dom'

const Details = () => {
	const { getOneUser, oneUser } = useContext(usersContext)
	const params = useParams();

	useEffect(() => {
		getOneUser(params.id);
	}, []);

	return (
		<div className="container">
			{oneUser ? (
				<>
					<div>{oneUser.name}</div>
					<div>{oneUser.email}</div>
					<div>{oneUser.age}</div>
				</>
			) : (
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			)}
		</div>
	)
}

export default Details