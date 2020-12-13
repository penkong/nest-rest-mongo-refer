// ---------------------- Packages ------------------------

import mongoose from 'mongoose'

// --------------------------------------------------------

// input
export interface IUserInfo {
	email: string
	password: string
	username?: string
	role?: number
	photo?: any
}

// add to this(model)
export interface IUserModel extends mongoose.Model<IUserDoc> {
	build(attrs: IUserInfo): IUserDoc
}

// output - return
export interface IUserDoc extends mongoose.Document {
	email: string
	password: string
	username: string
	role: number
	photo: Buffer
	resetPasswordLink: string
}
