// ------------------------ Packages -------------------------------

import { Module } from '@nestjs/common'

// ------------------------ Local ----------------------------------

import { DatabaseModule } from '../../../Database/'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { authProviders } from './models/user/user.provider'

// -----------------------------------------------------------------
@Module({
	imports: [DatabaseModule],
	controllers: [AuthController],
	providers: [AuthService, ...authProviders]
})
export class AuthModule {}
