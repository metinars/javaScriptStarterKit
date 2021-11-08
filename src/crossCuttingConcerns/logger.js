export default class BaseLogger{
    log(data){
        console.log("Default logger : " + data);
    }
}

export default class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data);
    }
}

export default class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data);
    }
}