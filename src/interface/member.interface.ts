import { Document } from 'mongoose';

export interface IMember extends Document {
    readonly id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly mobileNumber: string;
    readonly email: string;
    readonly role: string;
}