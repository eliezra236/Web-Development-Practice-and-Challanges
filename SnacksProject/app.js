const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/peopleDB", {
  useNewUrlParser: true,
});





// const john = new Person({
//     name: "John",
//     age: 34
// })

// john.save();

// const

const snackSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  rating: Number,
  review: String,
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favorite_snack: snackSchema,
});

const Person = mongoose.model("Person", personSchema);

const Snack = mongoose.model("Snack", snackSchema);

const bisliGrill = new Snack({
  name: "Bisli grill",
  rating: 8,
  review: "Great with bamba but not so much on his own",
});


// apropo.save()

const amy = new Person({
  name: "Amy",
  age: 12,
  favorite_snack: bisliGrill
})

amy.save();

// Snack.insertMany([bisliGrill, bisliFalafel], function (err) {
//   err ? console.log("there was an error") : console.log("everything went fine");
// });

// Snack.deleteMany({ name: "Bamba" }, function(err) {
//     err? console.log("there was an error") : console.log("deleted")
// });

Snack.find(function(err, snacks) {
    if (err) {
        console.log("there was an error")
    } else {
        mongoose.connection.close();
        for (var snack of snacks) {
            console.log(snack.name)
        }
    }
})
