import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, ValidationPipe, Res, HttpStatus, Put } from '@nestjs/common';
import { CreateMemberDto } from 'src/dto/member/create-member.dto';
import { UpdateMemberDto } from 'src/dto/member/update-member.dto';
import { MemberService } from 'src/service/member/member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly membersService: MemberService) { }

  @Post()
  async createMember(@Res() response, @Body() createMemberDto: CreateMemberDto) {
    try {
      const member = await this.membersService.create(createMemberDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'success',
        member
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: member creation failed',
        error,
      });
    }
  }

  @Get()
  async getAllMembers(@Res() response) {
    try {
      const members = await this.membersService.getAllMembers();
      return response.status(HttpStatus.OK).json({
        message: 'success',
        members
      });
    } catch (error) {
      return response.status(error.status).json(error);
    }
  }

  @Get('/:id')
  async getMember(@Res() response, @Param('id') id: string) {
    try {
      const member = await this.membersService.findMemeberById(id);
      return response.status(HttpStatus.OK).json({
        message: 'success',
        member
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Put('/:id')
  async updateStudent(@Res() response, @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto) {
    try {
      const updatedMember = await this.membersService.update(id, updateMemberDto);
      return response.status(HttpStatus.OK).json({
        message: 'success',
        updatedMember
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: member updation failed',
        error,
      });
    }
  }

  @Delete('/:id')
  async deleteMember(@Res() response, @Param('id') id: string) {
    try {
      const deletedMember = await this.membersService.delete(id);
      return response.status(HttpStatus.OK).json(deletedMember);
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }
}
