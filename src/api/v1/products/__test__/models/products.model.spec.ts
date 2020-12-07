import { Test, TestingModule } from '@nestjs/testing';
import { Products } from '../../models';

describe('Products Model Test', () => {
	it('should be defined', () => {
		expect(Products).toBeDefined();
	});
});
