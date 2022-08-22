<template>
  <h1>Register to TaskApp</h1>
  <p>Start Organizing your tasks today!</p>
  <form @submit.prevent="signUp">
    <label for="email">Email</label><br />
    <input
      type="email"
      v-model="email"
      placeholder="example@taskapp.com"
      required
    />
    <br />
    <label for="password">Password</label><br />
    <input
      type="password"
      v-model="password"
      placeholder="************"
      required
    />
    <br />
    <label for="password">Confirm Password</label><br />
    <input
      type="password"
      v-model="confirmPassword"
      placeholder="************"
      required
    />
    <br />
    <input type="submit" value="Sign Up" />
    <p v-if="errorMsg" class="errorMsg">{{ errorMsg }}</p>
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
const confirmPassword = ref("");

// Error Message
const errorMsg = ref("");

// Router to push user once SignedUp to Log In
const redirect = useRouter();

// CheckPass function
const checkPass = () => {
  return password.value === confirmPassword.value ? true : false;
};

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
const signUp = async () => {
  if (checkPass()) {
    try {
      // calls the user store and send the users info to backend to logIn
      await useUserStore().signUp(email.value, password.value);
      // redirects user to the homeView
      redirect.push({ path: "/auth/login" });
    } catch (error) {
      // displays error message
      errorMsg.value = `Error: ${error.message}`;
      // hides error message
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
  } else {
    errorMsg.value = "Error: Passwords do not match";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style>
.errorMsg {
  color: red;
}
</style>
