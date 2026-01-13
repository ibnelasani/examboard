import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ExamformService {

private student =[{id:1, name:"Arshad",age:40},
    {id:2, name:"Rehan",age:42}
];

    getValueee(){
       return  this.student;
    }

    getstd(id:number){
        const mystd= this.student.find((s) => s.id ===id);
        if(!mystd) throw   new NotFoundException("Not foundddasdfasdf");
        return mystd;
    }

    //Post
    createStudent(data:{name:string;age:number}){
        const newStudent= {id:Date.length,...data};
        if(!newStudent) throw new NotFoundException("Record Not founddddrerererererer");
        this.student.push(newStudent);
        return this.student; 
      
    };
  

    updateStudent(id:number,data:{name:string ;age:number}){
        const index = this.student.findIndex((s)=> s.id===id);
        if(index===-1) throw new NotFoundException("Record Not found");
        this.student[index]= {id,...data};
        return this.student[index];
       }
    //Patch 

    patchStudent(id:number, data:Partial<{name:string;age:number}>){
        const stdpt  = this.getstd(id);
        Object.assign(stdpt,data);
        return stdpt;
    }
    //Delete Studen
    deleteStudent(id:number){
        const delStd= this.student.findIndex((s)=>s.id===id);
        if(delStd===-1) throw new NotFoundException("Not found");
        const deleteit = this. student.splice(delStd,1);
        return {messg: "Student Deleted",student: deleteit[0]};
    }

}