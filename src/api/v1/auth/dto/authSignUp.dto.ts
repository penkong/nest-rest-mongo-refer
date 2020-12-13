// ------------------------- Packages ------------------------------

import { IsEmail, IsOptional, IsString, Length } from 'class-validator'

// ------------------------  ----------------------------------

export class AuthSignUpDto {
	@IsString()
	@IsEmail()
	email: string

	@IsString()
	@Length(6, 20)
	password: string

	@IsString()
	@IsOptional()
	@Length(3, 32)
	username: string

	@IsString()
	@IsOptional()
	avatar: Buffer
}
