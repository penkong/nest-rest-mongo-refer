import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from '../../repositories';

describe('User Repository Test', () => {
	it('should be defined', () => {
		expect(UserRepository).toBeDefined();
	});
});
