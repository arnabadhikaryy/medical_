
import { Schema, model } from 'mongoose';

const DepartmentSchema = new Schema({
  
    depart_img_url: {
      type: String
    },
    department_name: {
      type: String
    },
    about_department: {
      type: String
    },
    dolar: {
        type: Number
    }, 
   doctors_number: {
      type: Number
  }
}
)

const departsection = model('doctor_department',DepartmentSchema);

export default departsection;
