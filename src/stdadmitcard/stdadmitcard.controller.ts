import { Controller, Get, Param, Query } from '@nestjs/common';
import { StdadmitcardService } from './stdadmitcard.service';

@Controller('stdadmitcard')
export class StdadmitcardController {

 constructor(private readonly studentService: StdadmitcardService) {}

  // GET /students
  @Get()
  getAll() {
    return this.studentService.findAll();
  }
    
}
