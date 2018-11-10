const mongodb = require('mongodb');

 
class Db{
 
	constructor(){
		this.mongoClient = mongodb.MongoClient;
        this.ObjectID = mongodb.ObjectID;
		this.mongoURL = "mongodb://jurus:frhnd2330@35.227.17.140:27017/jurus";
	}
 
	onConnect(callback){
		this.mongoClient.connect(this.mongoURL, (err, client) => {
			if(err) {
				console.log(err);
            }else{
				console.log("MongoDB connectado com sucesso");
			}
			callback(client.db("jurus"),client,this.ObjectID);
		});
	}
}
module.exports = new Db();