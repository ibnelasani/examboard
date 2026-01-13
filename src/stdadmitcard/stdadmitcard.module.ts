import { Module } from '@nestjs/common';
import { StdadmitcardService } from './stdadmitcard.service';
import { StdadmitcardController } from './stdadmitcard.controller';
import { Student,stdadmitSchema } from './admitschema/admitcard.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
        MongooseModule.forFeature([
      { name: Student.name, schema: stdadmitSchema },
    ]),
  ],
  providers: [StdadmitcardService],
  controllers: [StdadmitcardController]
})
export class StdadmitcardModule {}
