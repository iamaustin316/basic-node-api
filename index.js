import express from "express";
import bodyParser from "body-parser";

import usersRoutes from './routes/user.js'

const app = express();
const PORT = 5999;

app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    console.log('cool')
    res.send('Hello world')
})

app.listen(PORT, () => console.log(`Server runnning on port http://localhost:${ PORT }`))