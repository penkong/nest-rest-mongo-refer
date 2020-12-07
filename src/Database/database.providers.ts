import * as mongoose from 'mongoose';

export const databaseProviders = [
	{
		provide: 'DATABASE_CONNECTION',
		useFactory: (): Promise<typeof mongoose> =>
			mongoose.connect(process.env.MONGO_URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true
			})
	}
];
