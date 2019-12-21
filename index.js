const express = require("express");
const app = express();
app.get('/',(req , res)=>{
    res.setHeader('content-type', 'text/html');
    res.send('<h2> Hello World ! </h2>');

});

app.listen(process.env.PORT,()=>{
    console.log('Server Started ...');
});