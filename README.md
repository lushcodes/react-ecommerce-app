# React E-Commerce App (Blitz VST)

This is a mobile responsive e-commerce app built with React and Commerce.js. It is also hooked up to the Stripe API to manage payments.
You can find a deployed version of the site [here](https://blitzvst.netlify.app/)


## How To Run
If you wish to run the project from your local machine, please start by cloning this repo!

THEN:

1. Run ```npm install``` in your terminal to install the dependencies. 
2. Run ```npm start``` to fire up an instance in localhost:3000. 

Dependencies :
React-router / Material UI/Icons / Commerce.js / Stripe.js / Hook Form


## Process

### Set Up

1. I began by running ```npx create-react-app``` in the terminal to build out the folder and file structure.
2. I then installed the dependencies I would need: ```npm install @material-ui/core @material-ui/icons @chec/commerce.js @stripe/react-stripe-js @stripe/stripe-js react-router-dom react-hook-form```.
3. In index.js I imported the react and react-dom dependencies as well as the app.js file which points to the index.html file via a div with the id of 'root'.
4. Then in app.js, I created a functional component returning a single div with text inside.
5. I then ran npm start to see if everything had been hooked up correctly on local host.

