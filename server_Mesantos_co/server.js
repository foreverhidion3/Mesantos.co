// "start": "npx knex migrate:latest && npx knex seed:run && nodemon server.js"
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8082
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(cors({origin: 'http://localhost:3000'}));
// app.use(cors());
app.use(express.json());

//get
app.get('/', (req, res) => 
res.send('Hello World! Mesantos.co is listening'))

// All GETs
app.get('/admin', async function(request, response) {
    let data = await knex('admin_user').select('*')
    response.send((data))    
});

app.get('/books', async function(request, response) {
    let data = await knex('books').select('*')
    response.send((data))
});

app.get('/email', async function(request, response) {
    let data = await knex('email_list').select('*')
    response.send((data))
});

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

//POST email
app.post('/email', (request, response) => {
    knex('email_list').insert({
        email: request.body.email
    })
    .then (() => {
        response.json({message:"Email Address has been added"})
    })
    .catch(error => {
        console.error('Error inserting email:', error);
        response.status(500).json({ error: "An error occurred while adding the email address." });
    });
     
});
//POST admin
app.post('/admin', (request, response) => {
    knex('admin_user').insert({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        password: request.body.password,
        books_id: request.body.book_id,
        super_admin: request.body.super_admin
    })
    .then (() => {
        response.json({message:"New Admin_User has been added"})
    })
    .catch(error => {
        console.error('Error inserting email:', error);
        response.status(500).json({ error: "An error occurred while adding the email address." });
    });
     
});
//POST book
app.post('/books', (request, response) => {
    knex('books').insert({
        id: request.body.id,
        title: request.body.title,
        image_path: request.body.image_path,
        description: request.body.description,
        cost: request.body.cost,
        available: request.body.available
    })
    .then (() => {
        response.json({message:"New Book has been added and is ready for sale!"})
    })
    .catch(error => {
        console.error('Error inserting email:', error);
        response.status(500).json({ error: "An error occurred while adding the email address." });
    });
     
});




// app.post('/email', (req, res) => {
//     let newEmail = req.body;
//     email.push(newEmail);
//     res.send(`Email address: ${newEmail.email} has been added to the Library`);
    
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