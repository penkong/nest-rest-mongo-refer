// ---------------------- Packages ------------------------

import mongoose from 'mongoose';

// --------------------------------------------------------

// input
export interface IUserAttrs {
	email: string;
	password: string;
}

// add to this
export interface IUserModel extends mongoose.Model<IUserDoc> {
	build(attrs: IUserAttrs): IUserDoc;
}

// output - return
export interface IUserDoc extends mongoose.Document {
	email: string;
	password: string;
}
