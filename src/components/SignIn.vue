<template>
  <div class="min-h-min">
    <section class="flex items-center h-screen relative pt16 bg-white">
      <div class="container animate__animated animate__fadeIn animate__slow">
        <div>
          <div class="mb-6 text-center">
            <h3 class="appTitle">Log In to</h3>
            <h2 class="appTitle-gradient">TaskApp</h2>
            <p class="appSubtitle mb-10">Start Organizing your tasks today!</p>
          </div>
        </div>
        <div class="w-1/2 mx-auto md:w-3/5 lg:w-1/2">
          <div class="max-w-sm mx-auto">
            <form @submit.prevent="signIn">
              <div class="mb-2">
                <label class="inputFieldLabel" for="email">Email</label>
                <div>
                  <input
                    class="inputField w-full appearance-none focus:outline-none"
                    type="email"
                    v-model="email"
                    placeholder="example@taskapp.com"
                    required
                  />
                </div>
              </div>
              <div class="mb-2">
                <label class="inputFieldLabel" for="password">Password</label>
                <div class="relative flex flex-wrap items-stretch">
                  <input
                    class="inputField w-full appearance-none focus:outline-none"
                    :type="passwordFieldType"
                    v-model="password"
                    onpaste="return false"
                    placeholder="∙∙∙∙∙∙∙∙∙∙∙"
                    required
                  /><span
                    class="z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center right-0 pr-4 py-4 opacity-25"
                    @click="changeHidePasswordValue"
                    ><i class="fa-solid fa-eye-slash"></i
                  ></span>
                </div>
              </div>
              <button
                class="bg-at-light-green hover:bg-transparent text-white font-semibold hover:text-at-light-green py-2 px-4 my-2 w-full border border-transparent hover:border-at-light-green border-2 rounded"
                type="submit"
              >
                Sign In
              </button>
              <!-- <input class="btnPrimary" type="submit" value="Sign In" /> -->
              <p v-if="errorMsg" class="errorMsg">{{ errorMsg }}.</p>
              <p class="noacc">
                <span class="font-normal opacity-50 mr-2"
                  >Don't have an account?</span
                ><PersonalRouter :route="route" :buttonText="buttonText" />
              </p>
              <div class="flex items-center justify-center my-6">
                <img class="w-64" src="/loginwith.png" alt="" />
              </div>
              <div class="flex items-center justify-center">
                <div
                  class="flex bg-gray-400 text-center hover:bg-gray-300 text-white hover:text-gray-400 w-1/6 mx-5 w-10 h-10 items-center justify-center border border-transparent hover:border-gray-300 border-2 rounded"
                >
                  <i class="fa-brands fa-google"></i>
                </div>
                <div
                  class="flex bg-gray-400 text-center hover:bg-gray-300 text-white hover:text-gray-400 w-1/6 mx-5 w-10 h-10 items-center justify-center border border-transparent hover:border-gray-300 border-2 rounded"
                >
                  <i class="fa-brands fa-github"></i>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img
        class="baseImg md:top-0 md:right-0 mx-auto sm:h-full md:w-2/5 lg:w-1/2 md:object-cover animate__animated animate__fadeIn animate__slow"
        src="https://images.unsplash.com/photo-1596638787647-904d822d751e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1900&q=80"
        alt="LogIn img"
      />
      <div class="credits absolute h-full z-10 right-0 mx-5 my-5 py-5">
        <a
          class="flex items-center justify-center"
          href="https://unsplash.com/es/fotos/PP1yKpfA4HY"
          ><i class="fa-brands fa-unsplash mx-2 text-white"></i>
          <p class="text-white opacity-75">Cristofer Maximilian</p></a
        >
      </div>
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
import "animate.css";

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
