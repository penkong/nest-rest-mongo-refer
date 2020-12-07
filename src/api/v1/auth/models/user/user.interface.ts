// ---------------------- Packages ------------------------

import mongoose from 'mongoose';

// --------------------------------------------------------

// input
export interface IUserInfo {
	email: string;
	password: string;
}

// add to this(model)
export interface IUserModel extends mongoose.Model<IUserDoc> {
	build(attrs: IUserInfo): IUserDoc;
}

// output - return
export interface IUserDoc extends mongoose.Document {
	email: string;
	password: string;
}
