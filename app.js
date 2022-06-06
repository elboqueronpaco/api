import express from "express"
import {config} from 'dotenv'
import { fileURLToPath } from "url"
import path from 'path'
config()
const port = process.env.PORT || 4444
const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app
  //.use(express.static(__dirname + '/public'))
  .get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,'/public','index.html'))
  })
  .listen(port, () => console.log(`Servidor corriento ${port}`))