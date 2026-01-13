import { IsInt, IsString } from "class-validator";
import{Type} from 'class-transformer';

export class ExamformDto {
    
    @IsString()
    name:string;
    @Type(()=>Number)
    @IsInt()
    age:number;
}