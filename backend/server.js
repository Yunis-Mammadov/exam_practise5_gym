const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const app = express()
app.use(cors())
app.use(bodyParser.json())
dotenv.config()

const GymSchema = new mongoose.Schema({
    imageURL: String,
    name: String,
    description: String
})

const GymModel = new mongoose.model("Gym", GymSchema)

app.get("/gym", async(req, res) => {
    const { name } = req.query
    const gym = await GymModel.find(name)
    res.status(200).send(gym)
})

app.get("/gym/:id", async(req, res) => {
    const { id } = req.params
    const gym = await GymModel.findById(id)
    res.status(200).send(gym)
})

app.delete("/gym/:id", async(req, res) => {
    const id = req.params.id
    const gym = await GymModel.findByIdAndDelete(id)
    res.status(203).send({
        message: `${gym} deleted successfully!`
    })
})

app.post("/gym", async(req, res) => {
    const { imageURL, name, description } = req.body
    const newGym = new GymModel({
        imageURL: imageURL,
        name: name,
        description: description 
    })
    await newGym.save()
    res.status(201).send({
        message: `${newGym} posted successfully!`
    })
})

PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`);
})

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION

mongoose.connect("mongodb+srv://yunis_admin:Admin123@author.osk3d9z.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Mongo DB connected !");
})