# Mesantos.co

//Introduction

The purpose of this project is to provide a beautiful UI and Admin capabilities for Mesantos.co.

Mesantos Kimura, is a Japanese American writer whose name carries a deep connection to her ancestral roots. "Kimura," a topographic surname in Japanese onomastics, traces its origins back to the combination of two meaningful kanji characters. "木" (Ki) symbolizes "tree" or "wood," while "村" (Mura) represents "village" or "hamlet." Together, "Kimura" beautifully translates to "village of trees" or "woodland village."
Currently residing in the captivating landscapes of Oregon, USA, Mesantos finds boundless inspiration from the wilds that surround her, her close-knit community, and most importantly, her beloved family. She shares her life with a supportive husband and two cherished children, who are an endless source of encouragement for her writing endeavors.
A confident and empowered individual, Mesantos embraces her femininity and traditional values, weaving them seamlessly into her creative expressions. Through her captivating prose, she eloquently conveys the beauty of nature and the enduring spirit of her cultural heritage, creating a unique tapestry of emotions that resonate deeply with her readers.
Mesantos Kimura's literary journey is a celebration of her heritage, her bond with nature, and the cherished moments shared with her loved ones. 

Kimura needs a website created for the promotion of her upcoming novel The Sword Slinger, an epic tale about a half-ling named Creeper set in her universe of Elmareth.

Despite what her bio says, she is rather disagreeable and controling by nature. She doesnt want anyone one her management team to be able to edit the content of the website. She maintains full control with the super-user:

Super-user Name: Mesantos_K
Password: 1234qwer

She requested that the web-site be created with:

1. React App 
2. Express 
3. PostgreSQL

In order to stream line the installation process, we wrote a docker-compose.yaml file to combind all the necessary downloads and add-ons into one 'docker-compose up' command. However, before the installation can begin, users must navigate to https://docs.docker.com/compose/install/ and install the latest version of Docker for their machine.

Once Docker is installed, navigate to the Mesantos.co folder and run; docker-compose up in your terminal.

With Kimura's permission, we have included the Super-user name and password inside of this document so that you will have full access to the application. However, feel free to create your own user name and password to get a better feel for the site.

//Backend

The database for Mesantos.co was seeded with knex and created with simpicity and utility in mind. It is seperated into three catagories:
1. Admin User
2. Books
3. Email List

    Users includes one Admin Super-user and an unlimited number of Admin users.
    
    Books is Kimura's current Library for sale.
    
    Email list was included to allow interested parties to apply for a Sword Slinger News Letter once the book offically launches





