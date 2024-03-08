import { Document,  Schema, model, models } from "mongoose";

export interface IUser extends Document {

}

const userSchema = new Schema({
    clerkId: { type: String, reuqired: true, unique: true }, 
    email: { type: String, reuqired: true, unique: true },
    username: { type: String, reuqired: true, unique: true },
    photo: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    planId: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 10 },
}); 

const User = models?.User || model('User', userSchema);

export default User;