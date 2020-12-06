// ------------------------- Packages ------------------------------

import { IsString, IsMongoId, IsJWT } from 'class-validator';

// ------------------------  ----------------------------------

export class AuthResponseDto {
	@IsString()
	@IsJWT()
	Access_token: string;

	@IsString()
	@IsMongoId()
	id: string;
}
