//What do I need to do for a database???
// Name of DB
// Data organization
//  a) Tables, Datatype restrictions, validation?
// Data for each Tables
// create methods
// retrieve methods
// update methods
// destroy methods
// Relationships

// Day 1: our basic database


function Echidna(name){
  // constructs the name of our overall database;
  this.name = name;
  // multiple tables will go into this.
  this.tables = {};
  // our table constructor
  this.createTable = function(name, schema){
    if (!schema){
      schema = {};
    }
    this.tables.push(new EchidnaTable(name,schema));
  }
  // write a new function that adds data to our table by name!

}
// a class that will be used by the overall database to create specific tables
function EchidnaTable(name, schema){
  this.name = name;
  this.schema = schema;
  // maybe this should be an object?
  this.data = [];
}

//1 Fix the code!
//2 Make the test below succeed (uncomment it and make it work!)
//TEST CODE
var myDB = new Echidna("First_DB");
console.log(myDB);
myDB.createTable('friends');
console.log(myDB);
// MAKE THIS WORK!
// myDB.create('friends',{name:"Charlie",occupation:"Bootcamp Leader"});
// console.log(myDB);
// where myDB now has a table of friends with a record of {name:"Charlie",occupation:"Bootcamp Leader"}.
