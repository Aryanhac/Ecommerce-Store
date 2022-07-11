const mongoose =require('mongoose');

const Database=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(process.env.Database_URL,{
            useNewURLParser:true,useUnifiedTopology:true
       }).then((data)=>{
           resolve('Database connnected successfully');
       }).catch(()=>{
           reject('Database Connection failed');
       })
    }); 
};

module.exports= Database;
