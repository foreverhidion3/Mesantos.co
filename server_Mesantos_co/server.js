// "start": "npx knex migrate:latest && npx knex seed:run && nodemon server.js"
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User_find = require('./log_in_helper_user_model/individual_user_findbyemail')

const app = express();
const port = 8082
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(cors({origin: 'http://localhost:3000'}));
// app.use(cors());
app.use(express.json());

//server get 
app.get('/', (req, res) => 
res.send('Hello World! Mesantos.co is listening'))





//middleware for jwtoken. Allows for authentication.

// function authenticateToken(req, res, next) {
//     const token = req.header('Authorization')?.split(' ')[1];
//     if (!token) return res.status(401).json({ error: 'Access denied. Token missing.' });
  
//     jwt.verify(token, 'Mesantos_co_secret_key', (err, user) => {
//       if (err) return res.status(403).json({ error: 'Invalid token.' });
//       req.user = user; // Save the authenticated user in the request object for further use
//       next(); // Proceed to the next middleware or route handler
//     });
//   }

//POST for LOGIN 
//Will check users creds. If they are correct, will generate and return a jwt
app.post('/login', async (request, response) => {
    const { email, password } = request.body;

    try {
        const user = await User_find.findByEmail(email);
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return response.status(401).json( {error: "Invalid email || password" });
        }
    
    const jwtoken = jwt.sign( {userId: user.id }, "Mesantos_co_secret_key");
    response.json( {jwtoken} )
    }
    catch (err) {
        console.error("Login Error:", err);
        response.status(500).json({error: 'Error during Login '});
    }
});


// When you have time, come back and set up authentication  
// example: 

// app.get('/admin', authenticateToken, async function(request, response) {
//     let data = await knex('admin_user').select('*')
//     response.send((data))    
// });


// All GETs


app.get('/admin', async function(request, response) {
    let data = await knex('admin_user').select('*')
    response.send((data))    
});

app.get('/books', async function(request, response) {
    let data = await knex('books').select('*')
    response.send(data)
});
app.get('/email', async function(request, response) {
    let data = await knex('email_list').select('*')
    response.send((data))
});
app.get('/requests', async function(request, response) {
    let data = await knex('user_requests').select('*')
    response.send((data))
});
//GET by id
app.get('/books/:id', async function(request, response) {
    let bookId = request.params.id;
    let data = await knex('books').select('*').where({ id:bookId }).first();
    response.json(data)
});


//ALL POSTS

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
})

//POST request
app.post('/requests', (request, response) => {
    knex('user_requests').insert({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
    })
    .then (() => {
        response.json({message:"New Request has been added"})
    })
    .catch(error => {
        console.error('Error inserting email:', error);
        response.status(500).json({ error: "An error occurred while adding the request." });
    });
     
});


//ALL DELETES


//DELETE book
app.delete('/books', (request, response) => {
    knex('books')
    .where({
        title: request.body.title
    })
    // .where('title', 'The TEST BOOK')
    .del(['id', 'title', 'description', 'cost','available' ]) 
    .then (() => {
        response.json({message:"Tile has been deleted"})
    })
    .catch(error => {
        console.error('Error with delete:', error);
        response.status(500).json({ error: "An error occurred while deleting that title." });
    });;
  })
  //DELETE admin
  app.delete('/admin', (request, response) => {
    knex('admin_user')
    .where({
        first_name: request.body.first_name,
        last_name: request.body.last_name
    })
    .del(['id', 'first_name', 'last_name', 'email','password', 'books_id', 'super_admin' ]) 
    .then (() => {
        response.json({message:"Admin_user has been deleted"})
    })
    .catch(error => {
        console.error('Error with delete:', error);
        response.status(500).json({ error: "An error occurred while deleting that Admin_user." });
    });;
  })
  //DELETE email
  app.delete('/email', (request, response) => {
    knex('email_list')
    .where({
         email: request.body.email 
        })
    .del(['email' ]) 
    .then (() => {
        response.json({message:"Email address has been deleted"})
    })
    .catch(error => {
        console.error('Error with delete:', error);
        response.status(500).json({ error: "An error occurred while deleting that email address." });
    });;
  })
  //DELETE request
  app.delete('/requests', (request, response) => {
    knex('user_requests')
    .where({
        first_name: request.body.first_name,
        last_name: request.body.last_name
    })
    .del(['id', 'first_name', 'last_name', 'email' ]) 
    .then (() => {
        response.json({message:"Request has been deleted"})
    })
    .catch(error => {
        console.error('Error with delete:', error);
        response.status(500).json({ error: "An error occurred while deleting that Request." });
    });;
  })


  //ALL PATCHES

  
  //PATCH admin
  app.patch('/admin', (request, response) => {
    knex('admin_user')
      .where({ 
          first_name: request.body.first_name,
          last_name: request.body.last_name
      })
      .update({ 
          email: request.body.email,
          books_id: request.body.book_id,
          password: request.body.password 
      })
      .then(() => {
          response.json({ message: "Admin_user has been updated" });
      })
      .catch(error => {
          console.error('Error with update:', error);
          response.status(500).json({ error: "An error occurred while updating the Admin_user." });
      });
  });

   //PATCH books
   app.patch('/books', (request, response) => {
    knex('books')
    .where({ title: request.body.title })
    .update({ description: request.body.description })
    .then (() => {
        response.json({message:"Book description has been update"})
    })
    .catch(error => {
        console.error('Error with delete:', error);
        response.status(500).json({ error: "An error occurred while updating the book." });
    });;
  })
  


//DELETE BY ID?
// app.delete('/books', (req,res) => {
//     knex('books')
//     .where('title', 'The TEST BOOK2').where('title',req.body.title)
//       .then(data => {
//         if(!data[0]){
//           res.json({
//             message:'That title does not exist for that user.'
//           })
//         }else{
//           knex('books').where('interest_name',req.body.interest_name).andWhere('personnel_id',req.params.personnel_id).del()
//           .then(res.status(200).json('Interest removed succesfully'));
//         }
//       })      
//       .catch(err =>
//         res.status(404).json({
//           message:'The data you are looking for could not be found. Please try again'
//         })
//       );
//   })



app.listen(port, () => {
    console.log(`Mesantos.co is listening on port ${port}` );
});