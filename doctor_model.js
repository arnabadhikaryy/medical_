
import { Schema, model } from 'mongoose';

const DoctorSchema = new Schema({
  
    name: {
      type: String
    },
    Specialization1: {
      type: String
    },
    Specialization2: {
      type: String
    },
    day: {
      type: String
    },
    time: {
        type: String
    }, 
    Extension_No: {
      type: Number
  },
  mobile: {
    type: Number
},
url:{
  type:String
}
}
)

const doctors = model('doctor',DoctorSchema);

export default doctors;
