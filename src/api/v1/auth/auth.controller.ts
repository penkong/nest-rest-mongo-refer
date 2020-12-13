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
import { AuthResponseDto, AuthSignOTPDto, AuthSignUpDto } from './dto';

// -----------------------------------------------------------------

@Controller('/api/v1/auth')
export class AuthController {
	// -------------------- Logger --------------------------

	private logger = new Logger(AuthController.name);

	// -------------------- Ctor --------------------------

	constructor(private authService: AuthService) {}

	// -------- consume service functionality -------------

	@Get('/test')
	public test() {
		return { work: 'ok'}
	}

	// ---

	@Post('/signup')
	public async signUp(
		@Body(ValidationPipe) authSignupDto: AuthSignUpDto
	): Promise<AuthResponseDto> {
		return this.authService.signUp(authSignupDto);
	}

	// ---
	

	@Post('/signin')
	public async signIn(
		@Body(ValidationPipe) authSigninDto: AuthSignUpDto
	): Promise<AuthResponseDto> {
		return await this.authService.signIn(authSigninDto);
	}

	// ---

	@Post('/otp')
	public async phoneOtp(
		@Body(ValidationPipe) authSignOTPDto: AuthSignOTPDto
	): Promise<AuthResponseDto> {
		return await this.authService.phoneOtp(authSignOTPDto);
	}
}

// -----------------------------------------------------
