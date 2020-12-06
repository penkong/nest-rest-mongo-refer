// ------------------------- Packages ------------------------------

import { IsMobilePhone, IsString, Max } from 'class-validator';

// ------------------------  ----------------------------------

export class AuthSignOTPDto {
	@IsString()
	@IsMobilePhone()
	phone: string;

	@IsString()
	@Max(4)
	password: string;
}
