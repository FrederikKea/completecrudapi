const express = require('express');
const app = express();


app.use(express.json());

//array with objects
let arrayOfNames = [{id: 0, name: 'Fred', age: 25}, {id: 1, name: 'Bob', age: 28},{id: 2, name: 'Alice', age: 22}];

//routes
//get route
app.get('/', (req, res) => {
    res.send(
        arrayOfNames.map(product =>
            `<h1>${product.name}</h1>
            <h5>${product.age}</h5>`
        ).join(''));
});

//post
app.post('/post',(req, res) => {
    console.log(req.body);
    res.send({name: req.body.name,
                    age: req.body.age})
    arrayOfNames.push(req.body);
});

//patch
app.patch('/patch/:id', (req, res) => {
    res.send({body: req.body})
    const copiArrayOfNames = [...arrayOfNames]
    //var picked = lodash.filter(arrayOfNames, x => x.id === req.params.id);
    var picked = arrayOfNames.find(o => o.id === req.params.id);
    //let foundIndex = arrayOfNames.find(x => x.id === req.params.id)
    console.log(picked)

    //arrayOfNames.push(req.body);

    //myArray.find(x => x.id === '45').foo;
    //var item = {...}
    //var items = [{id:2}, {id:2}, {id:2}];

    //var foundIndex = items.findIndex(x => x.id == item.id);
    //items[foundIndex] = item;
});

app.delete('/delete/:id',(req, res) => {
    console.log('delete', arrayOfNames[req.params.id]);
    //lidt i tvivl om hvad man sender her...
    res.send({body: req.body.delete})
    arrayOfNames.splice(req.params.id,1);
});



app.listen(8080);