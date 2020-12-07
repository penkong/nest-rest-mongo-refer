// ------------------------ Packages -------------------------------

import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist/config.service';

// ------------------------ Local ----------------------------------

import { AuthResponseDto, AuthSignOTPDto, AuthSignUpDto } from './dto-enum';
import { UserRepository } from './repositories';

// -----------------------------------------------------------------

@Injectable()
export class AuthService {
	// -------------------- Logger --------------------------

	private logger = new Logger(AuthService.name);

	// -------------------- Ctor ----------------------------

	constructor() // private configService: ConfigService
	// private userRepository: UserRepository
	{}

	// -------------------- Functionality -------------------

	public test() {
		return { test: true };
	}

	// ---

	// remove any
	public async signUp(
		authSignupDto: AuthSignUpDto
	): Promise<AuthResponseDto | any> {
		return { sign: 'signup' };
	}

	// ---

	// remove any
	public async signIn(
		authSigninDto: AuthSignUpDto
	): Promise<AuthResponseDto | any> {
		// const url = this.configService.get<string>('urls');
		return { sign: 'signin' };
	}

	// ---

	// remove any
	public async phoneOtp(
		authSignOTPDto: AuthSignOTPDto
	): Promise<AuthResponseDto | any> {
		return { sign: 'otp' };
	}
}

// -----------------------------------------------------
