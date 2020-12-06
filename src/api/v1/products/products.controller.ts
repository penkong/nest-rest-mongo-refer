// ------------------------- Packages ------------------------------

import {
	Body,
	Controller,
	Get,
	Logger,
	Post,
	ValidationPipe
} from '@nestjs/common';

// ------------------------ Local ----------------------------------

import { AuthService } from './products.service';

// -----------------------------------------------------------------

@Controller('products')
export class ProductsController {
	// -------------------- Logger --------------------------

	private logger = new Logger(ProductsController.name);

	// -------------------- Ctor --------------------------

	constructor(private authService: AuthService) {}

	// -------- consume service functionality ------------------------

	@Get('/test')
	public test() {}
}

// -----------------------------------------------------
