const express=require('express');
const app=express();
app.get('/',(req,res)=>res.json({message:'AssetFlow API running'}));
app.listen(3000);
