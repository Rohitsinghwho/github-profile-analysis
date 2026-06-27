import express from 'express';
import userRoutes from './module/user/user.route.js';
const app= express();

const PORT= process.env.PORT ||8080;
app.use(express.json());

app.get('/health',(req,res)=>{
    res.send('Server is running...');
})

app.use('/api/user',userRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
