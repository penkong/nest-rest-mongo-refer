// ---------------------- Packages ------------------------

// have to import like this at this version (nest throw error if not)
import * as mongoose from 'mongoose'

// ---------------------- Locals ------------------------

import { Password } from '../../password.service'

// ---------------------- Schema Define ----------------------------------

export const UserSchema = new mongoose.Schema(
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
			transform(doc, returnObject) {
				returnObject.id = returnObject._id
				delete returnObject._id
				delete returnObject.password
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
