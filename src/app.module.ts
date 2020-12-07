// ------------------------- Packages ------------------------------

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

// ------------------------ Local ----------------------------------

import { AuthModule, ProductsModule } from './api/v1'
import { DatabaseModule } from './Database'

import configuration from '../config/configuration'

// -----------------------------------------------------------------

@Module({
	imports: [
		ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
		DatabaseModule,
		AuthModule,
		ProductsModule
	],

	controllers: [],
	providers: []
})

// -----------------------------------------------------------------

// sudo docker run --name db -p 27017:27017 -d mongo
export class AppModule {}
