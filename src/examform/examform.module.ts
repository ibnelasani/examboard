import { Module } from '@nestjs/common';
import { ExamformController } from './examform.controller';
import { ExamformService } from './examform.service';
//import { StdmbiosModule } from './stdmbios/stdmbios.module';

@Module({
  controllers: [ExamformController],
  providers: [ExamformService],
  imports: []
})
export class ExamformModule {}
