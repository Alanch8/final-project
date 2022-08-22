<template>
  <h1>Log In to TaskApp</h1>
  <p>Start Organizing your tasks today!</p>
  <form @submit.prevent="signIn">
    <label for="email">Email</label><br />
    <input
      type="email"
      v-model="email"
      placeholder="example@test.com"
      required
    /><br />
    <label for="password">Password</label><br />
    <div>
      <input
        :type="passwordFieldType"
        v-model="password"
        placeholder="************"
        required
      /><span @click="changeHidePasswordValue">ojo</span>
    </div>
    <br />
    <input type="submit" value="Sign In" />
    <p v-if="errorMsg" class="errorMsg">{{ errorMsg }}</p>
  </form>
  <p>
    <span>Don't have an account?</span
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
const route = "/auth/sign-up";
const buttonText = "Sign Up";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

// Show hide confrimPassword variable
const hidePassword = ref(true);

// Change hidePassword value
const changeHidePasswordValue = () => {
  if (hidePassword.value === true) {
    hidePassword.value = false;
  } else {
    hidePassword.value = true;
  }
};

// Show hide password variable
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

// Router to push user once SignedIn to the HomeView
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};

// Styles
</script>

<style>
.errorMsg {
  color: red;
}
</style>
