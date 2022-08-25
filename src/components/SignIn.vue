<template>
  <div class="min-h-min">
    <section class="flex items-center h-screen relative pt16 bg-white">
      <div class="container px-4 mx-auto mb-16">
        <div class="w-full md:w-3/5 lg:w-1/2 animate_animated animate_fadeIn">
          <div class="max-w-sm mx-auto">
            <div class="mb-6 text-center">
              <h3 class="appTitle text-at-light-green font-black">
                Log In to TaskApp
              </h3>
              <p class="appSubtitle">Start Organizing your tasks today!</p>
            </div>
            <form @submit.prevent="signIn">
              <div class="mb-6">
                <label class="inputFieldLabel" for="email">Email</label>
                <input
                  class="inputField"
                  type="email"
                  v-model="email"
                  placeholder="example@test.com"
                  required
                />
              </div>
              <div class="mb-4">
                <label class="inputFieldLabel" for="password">Password</label>
                <div class="relative flex w-full flex-wrap items-stretch mb-3">
                  <input
                    class="inputField"
                    :type="passwordFieldType"
                    v-model="password"
                    onpaste="return false"
                    placeholder="************"
                    required
                  /><span
                    class="z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
                    @click="changeHidePasswordValue"
                    >ojo</span
                  >
                </div>
              </div>
              <button class="btnPrimary" type="submit">Sign In</button>
              <!-- <input type="submit" value="Sign In" /> -->
              <p v-if="errorMsg" class="errorMsg">{{ errorMsg }}.</p>
            </form>
            <p class="text-center">
              <span class="font-medium">Don't have an account?</span
              ><PersonalRouter :route="route" :buttonText="buttonText" />
            </p>
          </div>
        </div>
      </div>
      <img
        class="md:absolute md:top-0 md:right-0 mx-auto sm:h-full md:w-2/5 lg:w-1/2 md:object-cover animate__animated animate__fadeIn"
        src="/public/cristofer-maximilian-PP1yKpfA4HY-unsplash.jpeg"
        alt="LogIn img"
      />
    </section>
  </div>
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
