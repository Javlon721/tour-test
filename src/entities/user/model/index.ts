export interface IUser {
	id: string
	name: string
	email: string
	createdAt: Date
	updatedAt: Date
	isActive: boolean
	roles: string[]
}
