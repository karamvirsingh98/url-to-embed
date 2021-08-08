import feathers from "@feathersjs/feathers"
import express from '@feathersjs/express'
import cors from 'cors'
import ConversionService from "./conversionService"

//initialise feathers application using express. 
const app = express(feathers())

//configure application to use JSON parsing, cors, and other REST features.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.configure(express.rest())

//setup routes for html and api endpoint
app.use("/", express.static(`${__dirname}/public`))
app.use("/guide", express.static(`${__dirname}/public/guide.html`));
app.use("/about", express.static(`${__dirname}/public/about.html`));
app.use('/convert', new ConversionService())

//run app
app.listen(process.env.PORT || 3030).on("listening", () =>
  console.log("Server On")
);