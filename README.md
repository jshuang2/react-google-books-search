## React Google Books Search

An application created using the MERN stack and allows users to search for books via the Google Books API. Search results are dynamically rendered in the UI and users have the option to save and/or delete books.

View the deployed application at: <b><a href="https://search-google-books-api.herokuapp.com/" target="_blank">https://search-google-books-api.herokuapp.com/</a></b>

### Technologies Used
 - React JS
 - MongoDB
 - Mongoose
 - Express JS
 - Node
 - Axios

## How it works

1. Users are first directed to the `Home` page where they can search for any book. Book information is retrived via the publicly available Google Books API.

2. Upon searching for a book, users will see a list of relevant results. They can click `save` to save the book to the `Saved` page. In the back end, the book is saved to the Mongo database.

3. Users can save as many books as they want. If they then go to the `Saved` page, they'll not only see books that have been saved by them, but also previous visitor's saved books (it's basically a shared space of saved books).

4. In either the `Home` or `Saved` pages, a user can click on the `View Book` button. This will redirect them to the Google Books store page where they can either purchase or read a preview of the book.

5. If a user wants to remove a saved book from the list, they may click the `Delete` button to remove the book from the page. In the back end, this deletes the document from the Mongo database.

#### Search for, save, and delete books:   

![Google Books Search](https://user-images.githubusercontent.com/52802240/77485425-55f33b00-6dea-11ea-986c-17e9e4572261.gif)

---

## Installation and Setup Instructions


If you'd like to view the app locally, you may clone down this repository. You will need `node`, `npm`, and `MongoDB` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

---

## Reflection

This was a week long project I built during the final month of University of Washington's coding bootcamp. It was a culmination of much of what was taught in the program. Project goals included creating a functional React app and tying that together with a backend database.

I began this project with the `create-react-app` boilerplate and eventually added other technologies such as `react-router-dom`. One of the main challenges I ran into was manipulating state with ternery operators, but thankfully I now feel comfortable with it. 

At the end of the day, the technologies implemented in this project are React, React-Router, Express, MongoDB, Mongoose, JSX, and CSS, and Node. Creating this app proved to be a great challenge for me. I'm proud of what it is at its current state. 

In the future, I plan on adding authentication so that users can only view and delete books that they've saved as opposed to everyone's. This will add a privacy aspect that some users might prefer.


View the deployed application at: <b><a href="https://search-google-books-api.herokuapp.com/" target="_blank">https://search-google-books-api.herokuapp.com/</a></b>