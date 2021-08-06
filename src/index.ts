import feathers from "@feathersjs/feathers"
import express from '@feathersjs/express'
import cors from 'cors'
import ConversionService from "./conversionService"

const app = express(feathers())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.configure(express.rest())

app.use("/", express.static(`${__dirname}/public`))
app.use("/about", express.static(`${__dirname}/public/about.html`));
app.use('/convert', new ConversionService())

app.listen(process.env.PORT || 3030).on("listening", () =>
  console.log("Server On")
);