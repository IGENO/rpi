'use strict'
const MongoClient = require('mongodb').MongoClient


const get = async () => {

	let url = "mongodb+srv://vanmug:vanrasp8@cluster0-net0q.mongodb.net/test?retryWrites=true&w=majority"
	let DATABASE = "vanmug"
	let COLLECTION = "readings"

	let client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  let db = client.db(DATABASE)

	let response = await connection.db.collection(COLLECTION).find({}).toArray()
	console.log('response',response)

	client.close()

}

let result = await get()

console.log('result',result)


