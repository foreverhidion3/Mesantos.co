# Mesantos.co

//Introduction

The purpose of this project is to provide a beautiful UI and Admin capabilities for Mesantos.co.

Mesantos Kimura, is a Japanese American writer whose name carries a deep connection to her ancestral roots. "Kimura," a topographic surname in Japanese onomastics, traces its origins back to the combination of two meaningful kanji characters. "木" (Ki) symbolizes "tree" or "wood," while "村" (Mura) represents "village" or "hamlet." Together, "Kimura" beautifully translates to "village of trees" or "woodland village."
Currently residing in the captivating landscapes of Oregon, USA, Mesantos finds boundless inspiration from the wilds that surround her, her close-knit community, and most importantly, her beloved family. She shares her life with a supportive husband and two cherished children, who are an endless source of encouragement for her writing endeavors.
A confident and empowered individual, Mesantos embraces her femininity and traditional values, weaving them seamlessly into her creative expressions. Through her captivating prose, she eloquently conveys the beauty of nature and the enduring spirit of her cultural heritage, creating a unique tapestry of emotions that resonate deeply with her readers.
Mesantos Kimura's literary journey is a celebration of her heritage, her bond with nature, and the cherished moments shared with her loved ones. 

Kimura needs a website created for the promotion of her upcoming novel The Sword Slinger, an epic tale about a half-ling named Creeper set in her universe of Elmareth.

Despite what her bio says, she is rather disagreeable and controling by nature. She doesnt want anyone one her management team to be able to delete or edit the content of the website. She also is the only one who can create a new admin user. She maintains full control with the super-user:

Super-Admin Email: K_Mesantos@protonmail.com
Password: 1234creeper

She requested that the web-site be created with:

1. React App 
2. Express 
3. PostgreSQL

We chose knex, docker, bcrypt, and JASON Web Tokens to round out the package.  

In order to stream line the installation process, we tried to write a docker-compose.yaml file to combind all the necessary downloads and add-ons into one 'docker-compose up' command. However, we were not successful.
Therefore, anyone wanting to view the app will have to create a pg database, server, and react-app.

With Kimura's permission, we have included the Super-user name and password inside of this document so that you will have full access to the application. If you would like to create an account of your own, fill out the application form and wait for it to be approved by Kimura. If she approves your request, she will email you your user name and password from K_Mesantos@protonmail.com 

//Backend

The database for Mesantos.co was seeded with knex and created with simpicity and utility in mind. It is seperated into three catagories:
1. Admin User
2. Books
3. Email List
4. Admin User Account Requests

    Users includes one Admin Super-user and an unlimited number of Admin users.
    
    Books is Kimura's current Library in development.
    
    Email list was included to allow interested parties to apply for a Sword Slinger News Letter once the book offically launches

    Admin User Account Request was built to store the requests for new accounts

//UI 

Since the site is being develped primary for the launch of her new book, Mesantos asked us to hard code that data into the frontend. 
She wants to make absolutely sure that the users experince will not be disturbed for the launch. However, she asked us to write CRUD for all
aspects of the project so that when she is prepared to further devlope the site all of the tools are ready and waiting. Withthat in mind, we wrote 
CRUD for virtually all of her data.

Another request was that the application feel as if it exists in a single space. For the user and for her (Super_Admin). Because of this, we attempted to distiguish between customer UI and admin UI by creating a stark differnce between them visually.


//ISSUES
We ran out of time to properly implement JWToken nor bcrypt before the book was launched. As you might image, Kimura was furious. Without secuirty, she felt too exposed to run with the website. She said that she was afraid her employees would exploit her. In a fit of rage, she scrapped the project and fired us.

//FAILURES
As of 21 July 2023, there are numerous feature still unfinished:

    Purchase Ebook

    Pre-Purchase

    UI incomplete

    About href = not working











