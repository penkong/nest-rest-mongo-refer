// ------------------------- Packages ------------------------------

import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(cookieParser());

	app.enableCors();

	await app.listen(3000);
}

// -----------------------------------------------

bootstrap();
