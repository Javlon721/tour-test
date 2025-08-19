import React from 'react'

import { IUser } from '../model'

import user from './User.module.scss'

function User({ IUser }: { IUser: IUser }) {
	return (
		<div className={user.card}>
			<div className={user.header}>
				<h2>User Profile</h2>
			</div>
			{/* <div className={user.body}>
                <p><strong>ID:</strong> {IUser.id}</p>
                <p><strong>Name:</strong> {IUser.name}</p>
                <p><strong>Email:</strong> {IUser.email}</p>
                <p><strong>Created At:</strong> {IUser.createdAt.toLocaleDateString()}</p>
                <p><strong>Updated At:</strong> {IUser.updatedAt.toLocaleDateString()}</p>
                <p><strong>Status:</strong> {IUser.isActive ? 'Active' : 'Inactive'}</p>
                <p><strong>Roles:</strong> {IUser.roles.join(', ')}</p>
            </div> */}
		</div>
	)
}

export default User
