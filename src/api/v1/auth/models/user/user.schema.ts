// ---------------------- Packages ------------------------

import mongoose from 'mongoose';

// ---------------------- Locals ------------------------

import { Password } from '../../password.service';
import { IUserAttrs, IUserDoc, IUserModel } from './user.interface';

// ---------------------- Schema Define ----------------------------------

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{
		// view level logic
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.password;
				delete ret.__v;
			}
		}
	}
);

// -------------------------- Model Logic ------------------------------

userSchema.pre('save', async function (done) {
	// when this work , on pass change not email change or what ever
	// also pass creation consider modification
	if (this.isModified('password')) {
		const hashed = await Password.toHash(this.get('password'));
		this.set('password', hashed);
	}
	// @ts-ignore
	done();
});

userSchema.statics.build = (attrs: IUserAttrs) => new User(attrs);

const User = mongoose.model<IUserDoc, IUserModel>('User', userSchema);

// --------------------------------------------------------

User.build({ email: 'test@test.com', password: '12345678' });

export { User };
