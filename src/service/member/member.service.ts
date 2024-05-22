import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMemberDto } from 'src/dto/member/create-member.dto';
import { UpdateMemberDto } from 'src/dto/member/update-member.dto';
import { IMember } from 'src/interface/member.interface';


@Injectable()
export class MemberService {
  constructor(@InjectModel('Member') private readonly memberModel: Model<IMember>) { }

  async create(createMemberDto: CreateMemberDto): Promise<IMember> {
    const newMember = new this.memberModel(createMemberDto);
    return newMember.save();
  }

  async getAllMembers(): Promise<IMember[]> {
    return await this.memberModel.find();
  }

  async findMemeberById(id: string): Promise<IMember> {
    const memebr = await this.memberModel.findById(id).exec();
    if (!memebr) {
      throw new NotFoundException(`No member found with id: ${id}`);
    }
    return memebr;
  }

  async update(id: string, updateMemberDto: UpdateMemberDto): Promise<IMember> {
    const existingMember = await this.memberModel.findByIdAndUpdate(id, updateMemberDto, { new: true });
    if (!existingMember) {
      throw new NotFoundException(`No member to update: ${id}`);
    }
    return existingMember;
  }

  async delete(id: string): Promise<IMember> {
    const deletedMember = await this.memberModel.findByIdAndDelete(id);
    if (!deletedMember) {
      throw new NotFoundException(`No member to delete id: ${id}`);
    }
    return deletedMember;
  }
}
