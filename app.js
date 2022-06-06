import express from "express"
import {config} from 'dotenv'
config()
const port = process.env.PORT || 4444
const app = express()

app
  .get('/', (req, res)=>{
    res.status(200).json({message: 'Hola a todos'})
  })
  .listen(port, () => console.log(`Servidor corriento ${port}`))