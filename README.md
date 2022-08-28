<div id="top"></div>

# Final Project: <img align="center" src="./public/taskapp-brand-logo.png" alt="TaskApp-Brand" width="200"/>

## Project Setup

```sh
npm install
```

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

## Thursday August 25, 2022

We have styled the login and signin pages.

We have styled the home page.

## Thursday August 26, 2022

We have cleaned up the code.

We have debugged style errors and implemented some improvements.

We have improved this README to use it as documentation of the same.

## Final Result

Link to the Final Resul: [TaskApp](https://final-project-alanch.vercel.app/)

### LogIn Screen

![LogIn](./public/screen-login.png)

### SignUp Screen

![SignUp](./public/screen-register.png)

### Home Screen

![Home](./public/screen-main.png)

## Tech Stack

<span><a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
<img
        src="https://vitejs.dev/logo.svg"
        alt="vitejs"
        width="24"
      />
</a></span>
<span><a href="https://vuejs.org/" target="_blank" rel="noreferrer">
<img
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        alt="vuejs"
        width="24"
      />
</a></span>
<span><a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">
<img
        src="https://pinia.vuejs.org/logo.svg"
        alt="piniajs"
        width="24"
      />
</a></span>
<span><a href="https://supabase.com/" target="_blank" rel="noreferrer">
<img
        src="https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg"
        alt="supabase"
        width="24"
      />
</a></span>
<span><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
<img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
        alt="tailwindcss"
        width="24"
      />
</a></span>

<p>- Client: Vue.js, Vite (dev server)</p>
<p>- Router: Vue Router</p>
<p>- Store: Pinia and Pinia Persist for persistent login</p>
<p>- Database as a service: Supabase</p>
<p>- CSS framework: Tailwindcss</p>

<p align="right"><a href="#top">🔝</a></p>

<p align="center">Made with ❤️ and ☕️ by Aitor Lancharro</p>
