// ------------------------- Packages ------------------------------

import {
	Body,
	Controller,
	Get,
	Logger,
	Post,
	ValidationPipe
} from '@nestjs/common';

// ------------------------ Local ----------------------------------

import { AuthService } from './auth.service';

// -----------------------------------------------------------------
@Controller('auth')
export class AuthController {
	// -------------------- Logger --------------------------

	private logger = new Logger(AuthController.name);

	// -------------------- Ctor --------------------------

	constructor(private authService: AuthService) {}

	// -------- consume service functionality ------------------------

	@Get('/test')
	public test() {}

	// ------------------------------

	// for user sign in in application with user, pass ,and app type
	@Post('/signin')
	signIn(
		@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
	): Promise<AuthResponseDto> {
		return this.authService.signIn(authCredentialsDto);
	}

	// for user sign up in application with user, pass ,and app type
	@Post('/signup')
	signUp(@Body(ValidationPipe) authPhoneDto: AuthPhoneDto): Promise<void> {
		return this.authService.signInOTP(authPhoneDto);
	}
}

// -----------------------------------------------------
