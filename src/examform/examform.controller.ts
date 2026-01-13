import { Body, Controller, Get, Param,Post ,Put,Patch, Delete} from '@nestjs/common';
import { ExamformService } from './examform.service';
import {ExamformDto} from '../examform.dto/examform.dto';


@Controller('examform')
export class ExamformController {
    constructor(private readonly exmform: ExamformService){}

    @Get()
   getValueee(){
    return this.exmform.getValueee();
   }

    @Get(':id')
   getOne(@Param('id') id:string){
        return this.exmform.getstd(Number(id));
        }

    @Post()
    create(@Body() body:ExamformDto){
        return  this.exmform.createStudent(body);
    }
    @Put(':id')
    update(@Param('id') id:string , @Body() body:ExamformDto){
        return this.exmform.updateStudent(Number(id),body);

    
    }

    @Patch(':id')
    updatPatch(@Param('id') id:string , @Body() body:Partial<{name:string;age:number}>){
        return this.exmform.patchStudent(Number(id),body);
        
    }

    @Delete(':id')
    deleteRecod(@Param('id') id:string,){
        return this.exmform.deleteStudent(Number(id));

    }
        
}
