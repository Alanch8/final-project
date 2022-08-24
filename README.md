# Final Project: Task App

This template should help get you started developing the final project running on Vue 3 with the composition API, Pinia as a state management tool, vue router, vite and lastly Supabase running on the backend.

This is meant as an advanced starter ready to plug in your supabase variables and run directly on a local server already connected to your Supabase instance.

You are given some functions to see how the supabase ecosystem works with Vue and more specifically, pinia as a state management tool.

You can add any CSS framework of your liking like tailwindCSS, Bootstrap, MaterialUI or many of the cool libaries that exist in the web.

## Important

This app is not setUp to be deployed to a production environment like vercel or netlify.

Friday on August 19 we will look at how can we deploy this app to Vercels ecosystem.

## Project Setup

```sh
npm install
```

## Set Up your Environment Variables from Supabase located at the root folder of the project

```sh
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

#### Once you have added your environment variables, head to your .gitIgnore file located at the root folder and uncomment the .env file naming to avoid sharing any private access keys to your database

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# UPDATES:

> "War forewarned kills no soldiers"

## Thursday August 18, 2022

We have fixed the router, and now we can access all routes.

We have implemented the SignIn function inside the User.js Store.

The next step is to create the LogIn.vue component form so we can test the Supabase DB calls.

## Friday August 19, 2022

The first thing we have done is to try to understand all the logic of Supabase.

We have created the necessary fields for the Profiles table within Supabase.

We have implemented some features in SignUp.vue.

The next steps are to finish connecting our app with supabase to be able to create new users and to be able to login correctly.

## Monday August 22, 2022

We have implemented the necessary system to show and hide the passwords in the LogIn. (Eye system).

We have created the Nav component in which we paint the user's name from the email and use a button to LogOut with all its logic.

We have added the CRUD functions to the Task Store.

## Thuesday August 23, 2022

We have added the Moment.js library to automate dates and times.

We have created all the logic to be able to paint tasks and update home automatically.

Logic for eliminating tasks.

Logic for editing tasks.

Logic for completing/incompleting tasks.

## Wednesday August 24, 2022

We add the CSS Tailwind library.

We have styled the LogIn and Signin pages.

We have deployed the project in Vercel.
