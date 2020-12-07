// ------------------------ Packages -------------------------------

import { Connection } from 'mongoose'

// ------------------------ Local ----------------------------------

import { IUserDoc, UserSchema } from '..'
import {
	USER_MODEL,
	DATABASE_CONNECTION,
	USER
} from '../../../../../constants/'

// -----------------------------------------------------------------

export const authProviders = [
	{
		provide: USER_MODEL,
		useFactory: (connection: Connection) =>
			connection.model<IUserDoc>(USER, UserSchema),
		inject: [DATABASE_CONNECTION]
	}
]

// -----------------------------------------------------------------

// in normal express app.
// const User = mongoose.model<IUserDoc, IUserModel>('User', UserSchema);
