const express=require("express");
const app=express();
const dotenv=require("dotenv");
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.use(express.json());

app.post("/text", (req,res)=>{
 client.messages
    .create({
       from: 'whatsapp:+14155238886',
body:req.body.text,
       to: 'whatsapp:+918126885068'
     })
     .then(message => res.status(200).json(message.sid))
     .catch(e => { res.status(400).json('Got an error:', e.code, e.message); })



});



app.post("/image",(req,res)=>{
    client.messages
    .create({
       from: 'whatsapp:+14155238886',
body:req.body.text,
mediaUrl: ['https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
       to: 'whatsapp:+918126885068'
     })
     .then(message => res.status(200).json(message.sid))
     .catch(e => { res.status(400).json('Got an error:', e.code, e.message); })

});

app.post("/audio",(req,res)=>{
    client.messages
    .create({
       from: 'whatsapp:+14155238886',
body:"audio message",
mediaUrl: ["https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"],
       to: 'whatsapp:+918126885068'
     })
     .then(message => res.status(200).json(message.sid))
     .catch(e => { res.status(400).json('Got an error:', e.code, e.message); })

});


app.post("/vedio",(req,res)=>{
    client.messages
    .create({
       from: 'whatsapp:+14155238886',
body:"vedio message",
mediaUrl: ["http://techslides.com/demos/sample-videos/small.mp4"],
       to: 'whatsapp:+918126885068'
     })
     .then(message => res.status(200).json(message.sid))
     .catch(e => { res.status(400).json('Got an error:', e.code, e.message); })

});



app.post("/document",async (req,res)=>{
     await client.messages
    .create({
       from: 'whatsapp:+14155238886',
body:"document ",
mediaUrl:["https://www.africau.edu/images/default/sample.pdf"]   ,
    to: 'whatsapp:+918126885068'
     })
     .then(message => res.status(200).json(message.sid))
     .catch(e => { res.status(400).json('Got an error:', e.code, e.message); })


     
});


const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server running on port " + port);
})