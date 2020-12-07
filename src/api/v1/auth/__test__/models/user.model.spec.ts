import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../../models';

describe('User Model Test', () => {
	it('should be defined', () => {
		expect(User).toBeDefined();
	});
});
