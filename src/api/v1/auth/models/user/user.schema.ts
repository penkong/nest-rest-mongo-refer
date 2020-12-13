// ---------------------- Packages ------------------------

// have to import like this at this version (nest throw error if not)
import * as mongoose from 'mongoose'
import validator from 'validator'

// ---------------------- Locals ------------------------

import { Password } from '../../password.service'

// ---------------------- Schema Define ----------------------------------

export const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			trim: true,
			unique: true,
			index: true,
			lowercase: true,
			maxlength: 64,
			required: [true, 'Please Provide Valid Email!'],
			validate: [validator.isEmail, 'Please Provide Valid Email!']
		},
		password: {
			type: String,
			required: [true, 'Please provide a password'],
			minlength: 6,
			select: false
		},
		cellPhone: {
			type: String,
			trim: true,
			maxlength: 32,
			validate: [validator.isMobilePhone, 'Please Provide Valid Phone'],
			select: false
		},
		avatar: {
			type: String,
			// jpeg , png and ...
			contentType: String
		},
		userInfo: {
			firstName: {
				type: String,
				trim: true,
				lowercase: true,
				maxlength: 64
			},
			lastName: {
				type: String,
				trim: true,
				lowercase: true,
				maxlength: 64
			},
			photos: [
				{
					data: String,
					// jpeg , png and ...
					contentType: String,
					select: false
				}
			],
			phones: [
				{
					type: String,
					trim: true,
					maxlength: 32,
					select: false
				}
			],
			address: [
				{
					type: String,
					lowercase: true,
					maxlength: 512,
					select: false
				}
			],
			age: {
				type: Number,
				max: 128,
				min: 4
			}
		},
		username: {
			type: String,
			unique: true,
			maxlength: 32,
			trim: true,
			lowercase: true
		},
		role: {
			type: String,
			enum: [
				'user',
				'user-bronze',
				'user-gold',
				'user-platinum',
				'tester',
				'lead-guide',
				'admin',
				'super-admin'
			],
			default: 'user',
			required: [true, 'User Must Have Role Base On Enum!!!']
		},
		passwordChangedAt: Date,
		passwordResetToken: String,
		passwordResetExpires: Date,
		resetPasswordLink: {
			data: String,
			default: ''
		},
		active: {
			type: Boolean,
			default: true,
			select: false
		}
	},
	{
		timestamps: true,
		// view level logic
		toJSON: {
			transform(doc, returnObject) {
				returnObject.id = returnObject._id
				delete returnObject._id
				delete returnObject.__v
			}
		}
	}
)

// -------------------------- Plugin ------------------------------

// optimistic data versioning : for handling Concurrency challenges

// UserSchema.set('versionKey', 'version')
// UserSchema.plugin(updateIfCurrentPlugin)

// -------------------------- Middlewares ------------------------------

UserSchema.pre('save', async function (done) {
	// when this work , on pass change not email change or what ever
	// also pass creation consider modification
	if (this.isModified('password')) {
		const hashed = await Password.toHash(this.get('password'))
		this.set('password', hashed)
	}
	// @ts-ignore
	done()
})

// -------------------------- Schema Logic ------------------------------

// UserSchema.methods.doSthOnSchema = async function () {
// 	 this == the doc we just call method on it .
// }

// -------------------------- Model Logic ------------------------------

// UserSchema.statics.doSthOnModelItSelf = () => {}

// ---------------------------------------------------------------------
