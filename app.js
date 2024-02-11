import express from 'express';
import doctors from './doctor_model.js';
import departsection from './departmant_model.js'
import cors from 'cors'
const app = express();
app.use(
  cors()
);

// Server Status Check Route
app.get('/ping', (req, res) => {
  res.send('Pong');
});


// Import all routes

//doctors API rought----------------ocalhost:5000/arnabdoctordata
app.get("/arnabdoctordata",async(req,res)=>{
    try {
        const doctordata= await doctors.find(req.query);
        res.json(doctordata);
    } catch (error) {
        console.log(error);
    }
})

//department api rought..........localhost:5000/department
app.get('/department',async(req,res)=>{

try {
  const departmentdata= await departsection.find(req.query);
  res.json(departmentdata);
} catch (error) {
  console.log(error);
}

})



/*import userRoutes from './routes/user.routes.js';
import courseRoutes from './routes/course.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import miscRoutes from './routes/miscellaneous.routes.js';

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1', miscRoutes);*/

// Default catch all route - 404
app.all('*', (_req, res) => {
  res.status(404).send('OOPS!!! 404 Page Not Found');
});

// Custom error handling middleware


export default app; 