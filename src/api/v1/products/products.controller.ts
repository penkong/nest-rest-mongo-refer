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

import { ProductsService } from './products.service';

// -----------------------------------------------------------------

@Controller('products')
export class ProductsController {
	// -------------------- Logger --------------------------

	private logger = new Logger(ProductsController.name);

	// -------------------- Ctor --------------------------

	constructor(private productService: ProductsService) {}

	// -------- consume service functionality ------------------------

	@Get('/test')
	public test() {}
}

// -----------------------------------------------------
