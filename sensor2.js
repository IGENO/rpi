'use strict'
const MongoClient = require('mongodb').MongoClient
const Sensor = require("node-dht-sensor").promises

//const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs))

async function insertReading(reading) {
	try {
		let URL = "mongodb+srv://vanmug:vanrasp8@cluster0-net0q.mongodb.net/test?retryWrites=true&w=majority"
		let DATABASE = "meetup"
		let COLLECTION = "readings"
		let client = await MongoClient.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
	  let db = client.db(DATABASE)
		let response = await db.collection(COLLECTION).insertOne(reading)
		client.close()
	} catch(error) {
    client.close()
		console.log("error=",error)
	}
}

async function readSensor() {
	try {
    let result = await Sensor.read(22, 4)
    console.log(
      `temp: ${result.temperature.toFixed(1)}°C, humidity: ${result.humidity.toFixed(1)}%`
    )
    return result
	} catch(error) {
		console.log("error=",error)
	}
}
 
async function handler() {
  try {
    let reading = await readSensor()
    console.log('reading=',reading)
    let result = await insertReading(reading)

  } catch (error) {
    console.error("error=", error)
  }
}
 
handler()