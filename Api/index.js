import express from "express";
import routerCompany from "./routes/company.route.js";
import routerJob from "./routes/job.route.js";
import routerLogin from "./routes/auth.route.js";
import { executeAssociations } from "./data/models/associations.js";

await executeAssociations()

const app = express();
const urlencoded = express.urlencoded()
const json = express.json()

app.use(urlencoded)
app.use(json)
app.use(routerLogin)
app.use(routerCompany)
app.use(routerJob)
app.listen(4000, ()=>{
    console.log("Server listening on port 4000")
})