import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class CreateMemberDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    mobileNumber: string;

    @IsNotEmpty()
    @IsString()
    @IsEnum(['ADMIN', 'USER'], { message: 'Valid role required' })
    role: 'ADMIN' | 'USER';
}
