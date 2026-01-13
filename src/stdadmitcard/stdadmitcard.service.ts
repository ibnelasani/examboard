import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './admitschema/admitcard.schema';


@Injectable()
export class StdadmitcardService {

    constructor( @InjectModel(Student.name)
    private readonly studentModel: Model<Student>,
  ) {}

  async findAll() {
    return this.studentModel.find().exec();
  }
}
