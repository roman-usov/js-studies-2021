// A use case, we have a database, and we don't want connecting apps to generate multiple connections. So, in case an app already has a connection established, new calls need to go through this connection (say, implemented in an object), and not generate new connections.

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new Database("Mongo DB");
console.log(mongo.getData());
console.log(Database);

const mysql = new Database("Mongo DB");
console.log(mysql.getData());

// When we initially create the mongo object the created instance (its this object) is saved in Database.instance of the Database class and we create a flag Database.exists

// When we try and create a new object from Database, the class checks that it already has a database connection


