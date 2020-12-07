// ------------------------- Packages ------------------------------

import { IsEmail, IsString, Max, Min } from 'class-validator';

// ------------------------  ----------------------------------

export class AuthSignUpDto {
	@IsString()
	@IsEmail()
	email: string;

	@IsString()
	@Max(20)
	@Min(6)
	password: string;
}
