// ------------------------ Packages -------------------------------

import { Inject, Injectable, Logger } from '@nestjs/common'
import { Model } from 'mongoose'
import { ConfigService } from '@nestjs/config/dist/config.service'

// ------------------------ Local ----------------------------------

import { AuthResponseDto, AuthSignOTPDto, AuthSignUpDto } from './dto'
import { USER_MODEL } from '../../../constants'
import { IUserDoc } from './models'

// -----------------------------------------------------------------

@Injectable()
export class AuthService {
	// -------------------- Logger --------------------------

	private logger = new Logger(AuthService.name)

	// -------------------- Ctor ----------------------------

	constructor(
		@Inject(USER_MODEL)
		private userModel: Model<IUserDoc>,
		private configService: ConfigService
	) {}

	// -------------------- Functionality -------------------

	public test() {
		return { test: true }
	}

	// ---

	// remove any
	public async signUp(
		authSignupDto: AuthSignUpDto
	): Promise<AuthResponseDto | any> {
		const user = new this.userModel(authSignupDto)
		user.save()
		return user
	}

	// ---

	// remove any
	public async signIn(
		authSigninDto: AuthSignUpDto
	): Promise<AuthResponseDto | any> {
		// const url = this.configService.get<string>('urls');
		return { sign: 'signin' }
	}

	// ---

	// remove any
	public async phoneOtp(
		authSignOTPDto: AuthSignOTPDto
	): Promise<AuthResponseDto | any> {
		return { sign: 'otp' }
	}
}

// -----------------------------------------------------
