// -------------------------- Packages ----------------------------

import { Logger } from '@nestjs/common';

// -------------------------- Local  ----------------------------

import { User } from '../models/';

// ----------------------------------------------------------------

// @EntityRepository(User) Repository<ClientIntegrations>
export class UserRepository {
	// ---------------------- Logger --------------------------------

	private logger = new Logger(UserRepository.name);

	// -------------------------------------------------

	public async updateClientIntegrations(): Promise<any> {}

	// ---

	public async getById(id: number): Promise<any> {}
}
