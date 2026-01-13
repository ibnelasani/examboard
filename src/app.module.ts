import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamformModule } from './examform/examform.module';
import {ExamformController} from "./examform/examform.controller";
import {ExamformService} from './examform/examform.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
//import { StudentModule } from './student/student.module';
//import { StdbioModule } from './stdbio/stdbio.module';
import { StdadmitcardModule } from './stdadmitcard/stdadmitcard.module';
//import { StudentService } from './student/student.service';
//import { StudentModule } from './student/student.module';
//import { StudentController } from './student/student.controller';
//import { StudentService } from './student/student.service';
import mongoose from 'mongoose';
//MongooseModule.forRoot('mongodb://localhost:27017/examboard')
@Module({
  imports: [ExamformModule,ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    StdadmitcardModule],
  controllers: [AppController,ExamformController],
  providers: [AppService,ExamformService,],
})
export class AppModule {}