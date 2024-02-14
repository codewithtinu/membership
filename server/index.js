const express = require('express');
const app = express();
const cors=require("cors");
app.use(cors());
app.use(express.json());
const mongoose=require("./database/Schema");

app.post('/api/signup', async(req, resp) => {
   const {name,username,password}=req.body;
   const db=new mongoose({   
    name:name,
    username:username,
    password:password
   });
  await db.save();
   console.log(db);
   resp.json({msg:"successfully stored"})
});

app.listen(2821, () => {
    console.log('Server started on 2821 port');
})