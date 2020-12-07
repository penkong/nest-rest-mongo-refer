// ------------------------ Packages -------------------------------

import { Module } from '@nestjs/common';

// ------------------------ Local ----------------------------------

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

// -----------------------------------------------------------------

@Module({
	controllers: [ProductsController],
	providers: [ProductsService]
})
export class ProductsModule {}
