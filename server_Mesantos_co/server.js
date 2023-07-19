const express = require('express');
const cors = require('cors');

const app = express();
const port = 8082
const knex = require('knex')(require('./knexfile.js')['development']);


app.use(cors());
app.use(express.json());

//get
app.get('/', (req, res) => 
res.send('Hello World! Mesantos.co is listening'))

// app.get('/', async function(request, response) {
//     let data = await knex('test_emails').select('*')
//     response.send((data))    
// });

// app.get('/', (req, res) => 
// res.send("This then is the end."))

// app.get ('/books/:id', (req, res) => {
//     let { id } = req.params; 
//     console.log(`This is the book ID! ${id}`)
//     let mybook = books.find(element => {
//         console.log(element.id, parseInt(id))
//         return element.id === parseInt(id);
//     })
//     console.log("This is the book", mybook)
//     res.send(mybook)   
// })

// app.get('/greeting', (req, res) => {
//     res.send("Hello Paul! \n We've been waiting for you.")
// })

//post
// app.post('/books', (req, res) => {
//     let newBook = req.body;
//     books.push(newBook);
//     res.send(`Your book: ${newBook.name} has been added to the Library`);
    
// })

// app.post('/movies', (req, res) => {
//     let movieToAdd = req.body; // Access the body (payload) of the request
//     moviesArr.push(movieToAdd);
//     res.send(moviesArr);

//put
// app.put('/books/:id', (req, res) => {
//     let { id } = req.params
//     let { update } = req.body

//     let bookI = books.findIndex((book) => book.id === parseInt(id))

//     if (bookI !== undefined) {
//         books[bookI] = {...books[bookI], ...update };
//         res.send(`books has been updated with: ${id}`)
//     } else {
//         res.send("ID not found")
//     }
// })

// app.put('/movies/:id', (req, res) => {
//     var { id } = req.params; 

// moviesArr.forEach((movie, index) => {
//     if(movie.id == id) moviesArr[index] = {
//         "id": id,
//         "title": "Home Alone",
//         "runtime": 103,
//         "release_year": 1990,
//         "director": "Chris Columbus"
//     }
// });

//patch
// app.patch('/movies/:id', (req, res) => {
//     var { id } = req.params;
//     let {title } = req.body;

//     moviesArr.forEach((movie, index) => {
//         if(movie.id == id) moviesArr[index].title = title; 
//     });
//     var justAdded = moviesArr.find(movie => movie.id == id);
//     res.send(justAdded);
// })

//delete
// app.delete('/movies/:id', (req, res) => {
//     var { id } = req.params;
//     var updatedMovies = moviesArr.filter(movie => movie.id != id);
//     moviesArr = updatedMovies;
//     res.send("Resource has been deleted.")
// })



app.listen(port, () => {
    console.log(`Mesantos.co is listening on port ${port}` );
});