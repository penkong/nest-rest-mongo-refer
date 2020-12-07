// ------------------------- Packages ------------------------------

import * as mongoose from 'mongoose'

// ------------------------ Local ----------------------------------

import { DATABASE_CONNECTION } from '../constants/index'

// -----------------------------------------------------------------

export const databaseProviders = [
	{
		provide: DATABASE_CONNECTION,
		useFactory: (): Promise<typeof mongoose> =>
			mongoose.connect(process.env.MONGO_URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true
			})
	}
]

// -----------------------------------------------------------------
