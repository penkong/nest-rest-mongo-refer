// ------------------------- Packages ------------------------------

import { IsString, IsMongoId, IsJWT } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// ------------------------  ----------------------------------

export class AuthResponseDto {
	@ApiProperty()
	@IsString()
	@IsJWT()
	Access_token: string;

	@ApiProperty()
	@IsString()
	@IsMongoId()
	id: string;
}
