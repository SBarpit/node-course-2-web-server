const express=require('express');
const hbs=require('hbs');
const port=process.env.PORT || 1995;
var app=express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear()
});
app.get('/',(req,res)=>{
//res.send('<h1>Hello Express</h1>');
// res.send({
// 	name:'Arpit',
// 	likes:[
// 	'Bikeing',
// 	'NetSurfing']
res.render('home.hbs',{
	pageTitle:'Home Page',
	mgs:'Welcome to my website',
	});

});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		pageTitle:'About Page',
		});
});

app.get('/bad',(req,res)=>{
	res.send({
		error:'Page Not Found',
		status_code:'404'
	});
});
app.listen(port,()=>{
	console.log(`Server is up on port no ${port}`);
});
