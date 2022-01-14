const express=require('express');
const path=require('path');

const app=express();
const port=process.env.port || 3000

app.use(express.static(path.join(__dirname,'assets')))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/register',(req,res)=>{

})
app.post('/profile',(req,res)=>{

})




app.listen(port,()=>{
    console.log(`Servidor ejecutandose en el puerto ${port}`)
})