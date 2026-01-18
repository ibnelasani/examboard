import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamformModule } from './examform/examform.module';
import {ExamformController} from "./examform/examform.controller";
import {ExamformService} from './examform/examform.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { StdadmitcardModule } from './stdadmitcard/stdadmitcard.module';
import mongoose from 'mongoose';
//MongooseModule.forRoot('mongodb://localhost:27017/examboard')
@Module({
  imports: [ExamformModule,ConfigModule.forRoot(),
    //MongooseModule.forRoot(process.env.MONGO_URI!),
    MongooseModule.forRoot('mongodb://mongo:lfOLnLSPUGgidpfOjGvQXTdXlDsvfKaQ@switchyard.proxy.rlwy.net:42035'),
    StdadmitcardModule],
  controllers: [AppController,ExamformController],
  providers: [AppService,ExamformService,],
})
export class AppModule {}