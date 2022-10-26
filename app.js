const { default: mongoose, Error } = require("mongoose");
const { ObjectId } = require('bson')
const Number = require('./models/numbersModel');

const url = "mongodb+srv://thainaraiesb:4Opjww5EZq6XgDnB@cluster1.9ovrltd.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url)
    .then(crud())
    .catch(error => console.log("Not working!", error));


// Number.find({})
//     .then(listNumbers => console.log(listNumbers))
//     .catch(error => console.log(error));

// Number.findOne({ _id: ObjectId() })
//     .then(Number => console.log(Number))
//     .catch(error => console.log(error));

// Number.findById(ObjectId("635870bedd224ffa74477795"))
//     .then(Number => console.log(Number))

// Number.updateOne({ _id: ObjectId() }, { name: 'negus' })
//     .then(console.log('updated'))
//     .catch(error => console.log(error));

// Number.deleteOne({ _id: ObjectId('635870bedd224ffa74477795') })
//     .then(console.log('id deleted'))
//     .catch(error => console.log(error))

async function crud() {
    //inserir
    const newNumber = new Number({ name: 'thai', contact: '1234-5678' });
    newNumber.save().catch(error => console.log(error));
    console.log(newNumber._id);

    //find all
    await Number.find({})
        .then(listNumbers => console.log(listNumbers))
        .catch(error => console.log(error));

    //find  
    await Number.findOne({ _id: newNumber._id })
        .then(Number => console.log(Number))
        .catch(error => console.log(error));

    //update    
    await Number.updateOne({ _id: newNumber._id }, { name: 'negus' })
        .then(console.log('updated'))
        .catch(error => console.log(error));

    //find by id
    await Number.findById(newNumber._id)
        .then(Number => console.log(Number))

    // delete
    await Number.deleteOne({ _id: newNumber._id })
        .then(console.log('id deleted'))
        .catch(error => console.log(error))
}