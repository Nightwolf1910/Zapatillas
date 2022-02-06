const express=require('express');
const path=require('path');
const session=require('express-session');

const app=express();
const port=process.env.port || 3000

app.use(express.static(path.join(__dirname,'assets')))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret:'123456789',
    resave:false,
    saveUninitialized:false
}))

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/register',(req,res)=>{
    res.render('registro')
})
app.get('/registro2.ejs',(req,res)=>{
    res.render('registro2')
})
app.get('/sesion',(req,res)=>{
    res.render('sesion')
})




app.listen(port,()=>{
    console.log(`Servidor ejecutandose en el puerto ${port}`)
})