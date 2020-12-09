const { response } = require('express');
const express = require ('express');
const app = express();
const axios = require('axios');
const formulas = require ("./formulas")

app.listen(3000,()=>{
    console.log('/',"connected to port 3000")
})

app.get('/',(req,res)=> {
    res.send(pedazo_info)
});

  pedazo_info = {
      id : 1,
      nombre: "daniel"
  }


app.post('/',(require,response)=>{
    response.send("guardando la data...")
})

app.use(express.static("static"))