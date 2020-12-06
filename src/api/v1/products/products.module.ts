import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';

@Module({
	controllers: [],
	providers: [ProductsService]
})
export class ProductsModule {}
