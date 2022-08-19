<template>
  <!-- <div>Sign Up</div>
  <PersonalRouter :route="route" :buttonText="buttonText" />
  <form @click.prevent="signUp">
    <input type="text" v-model="email" />
    <input type="password" v-model="password" />
    <input type="submit" />
  </form> -->
  <h1>Register to TaskApp</h1>
  <p>Start Organizing your tasks today!</p>
  <form @click.prevent="signUp">
    <label for="email">Email</label><br />
    <input
      type="text"
      v-model="email"
      placeholder="example@taskapp.com"
    /><br />
    <label for="password">Password</label><br />
    <input
      type="password"
      v-model="password"
      placeholder="************"
    /><br />
    <label for="password">Confirm Password</label><br />
    <input
      type="password"
      v-model="password"
      placeholder="************"
    /><br />
    <input type="submit" value="Sign Up" />
  </form>
  <p>
    <span>Have an account?</span
    ><PersonalRouter :route="route" :buttonText="buttonText" />
  </p>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/login";
const buttonText = "Log In";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

// Show hide password variable
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
// Show hide confrimPassword variable
const hidePassword = ref(true);

// Router to push user once SignedUp to Log In
const redirect = useRouter();
// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
const signUp = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signUp(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/auth" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style></style>
