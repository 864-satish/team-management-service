import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberSchema } from 'src/schema/member.schema';
import { MemberController } from './controller/member/member.controller';
import { MemberService } from './service/member/member.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    MongooseModule.forRoot(
      process.env.MONGO_DB_HOST, 
      { dbName: process.env.MONGO_DB_NAME }
    ),
    MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }])
  ],
  controllers: [AppController, MemberController],
  providers: [AppService, MemberService],
})
export class AppModule { }
