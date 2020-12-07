import { Test, TestingModule } from '@nestjs/testing';
import { ProductsRepository } from '../../repositories';

describe('ProductsRepository Test', () => {
	it('should be defined', () => {
		expect(ProductsRepository).toBeDefined();
	});
});
