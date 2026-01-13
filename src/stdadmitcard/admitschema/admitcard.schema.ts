import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'stdbio' }) // existing collection name
export class Student extends Document {
 
  @Prop()
  id:number;

  @Prop()
  name: string;
  @Prop()
  rollNo: number;

  @Prop()
  class: string;

  @Prop()
  age: number; 

}

export const stdadmitSchema = SchemaFactory.createForClass(Student);
