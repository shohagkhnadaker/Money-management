require('dotenv').config()
const app=require('./app')
const Databage = require('./config/DB')
const PORT=process.env.PORT

app.listen(PORT,async()=>{
await Databage()
})