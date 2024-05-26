import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

enum MEMBER_ROLE {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

@Schema()
export class Member extends Document {

    @Prop({ unique: true, default: uuidv4() })
    id: string;

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true, unique: true })
    mobileNumber: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    role: MEMBER_ROLE;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
