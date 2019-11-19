'use strict'
const MongoClient = require('mongodb').MongoClient


const get = async () => {

	let url = "mongodb+srv://vanmug:vanrasp8@cluster0-net0q.mongodb.net/test?retryWrites=true&w=majority"
	let DATABASE = "meetup"
	let COLLECTION = "readings"

	let client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        let db = client.db(DATABASE)

	let response = await db.collection(COLLECTION).findOne({})
	console.log('response',response)

	client.close()

}

get().then((result) => {
console.log('result',result)
})


