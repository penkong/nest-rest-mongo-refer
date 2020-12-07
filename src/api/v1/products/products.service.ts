// ------------------------ Packages -------------------------------

import { Injectable, Logger } from '@nestjs/common';

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

@Injectable()
export class ProductsService {
	// -------------------- Logger --------------------------

	private logger = new Logger(ProductsService.name);

	// -------------------- Ctor ----------------------------

	constructor() {}

	// -------------------- Functionality -------------------

	public test() {
		return { test: true };
	}
}
