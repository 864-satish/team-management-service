import { CreateMemberDto } from './create-member.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {
  @IsNotEmpty()
  id: string;
}
