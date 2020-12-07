// ------------------------- Packages ------------------------------

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

// ------------------------ Local ----------------------------------

import { AuthModule, ProductsModule } from './api/v1';

import configuration from '../config/configuration';

// -----------------------------------------------------------------

@Module({
	imports: [AuthModule]
})
@Module({
	imports: [
		ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
		// MongooseModule.forRoot(process.env.MONGO_URI, {
		// 	useNewUrlParser: true,
		// 	useUnifiedTopology: true,
		// 	useCreateIndex: true
		// }),
		AuthModule,
		ProductsModule
	],

	controllers: [],
	providers: []
})

// -----------------------------------------------------------------
export class AppModule {}

// sudo docker run --name db -p 27017:27017 -d mongo
