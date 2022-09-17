<template>
  <div class="min-h-min">
    <section class="flex items-center h-screen relative pt16 bg-white">
      <div class="container animate__animated animate__fadeIn">
        <div>
          <div class="mb-6 text-center">
            <h3 class="appTitle">Register to</h3>
            <h2 class="appTitle-gradient">TaskApp</h2>
            <p class="appSubtitle mb-10">Start Organizing your tasks today!</p>
          </div>
        </div>
        <div class="w-1/2 mx-auto md:w-3/5 lg:w-1/2">
          <div class="max-w-sm mx-auto">
            <form @submit.prevent="signUp">
              <div class="mb-2">
                <label class="inputFieldLabel" for="email">Email</label>
                <div class="relative flex flex-wrap items-stretch">
                  <span
                    class="z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center left-0 pl-5 py-4 opacity-25"
                    ><i class="fa-solid fa-user"></i
                  ></span>
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
                  <span
                    class="z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center left-0 pl-5 py-4 opacity-25"
                    ><i class="fa-solid fa-lock"></i></span
                  ><input
                    class="inputField w-full appearance-none focus:outline-none"
                    type="password"
                    v-model="password"
                    placeholder="∙∙∙∙∙∙∙∙∙∙∙"
                    required
                  />
                </div>
              </div>
              <div class="mb-2">
                <label class="inputFieldLabel" for="password"
                  >Confirm Password</label
                >
                <div class="relative flex flex-wrap items-stretch">
                  <span
                    class="z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center left-0 pl-5 py-4 opacity-25"
                    ><i class="fa-solid fa-lock"></i></span
                  ><input
                    class="inputField w-full appearance-none focus:outline-none"
                    type="password"
                    v-model="confirmPassword"
                    placeholder="∙∙∙∙∙∙∙∙∙∙∙"
                    required
                  />
                </div>
              </div>
              <button
                class="bg-at-light-green hover:bg-transparent text-white font-semibold hover:text-at-light-green py-2 px-4 my-2 w-full border border-transparent hover:border-at-light-green border-2 rounded"
                type="submit"
              >
                Sign Up
              </button>
              <p v-if="errorMsg" class="errorMsg">{{ errorMsg }}.</p>
              <p class="noacc">
                <span class="font-normal opacity-50 mr-2">Have an account?</span
                ><PersonalRouter :route="route" :buttonText="buttonText" />
              </p>
            </form>
          </div>
        </div>
      </div>
      <img
        class="baseImg md:top-0 md:right-0 mx-auto sm:h-full md:w-2/5 lg:w-1/2 md:object-cover"
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

const route = "/auth/login";
const buttonText = "Log In";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const errorMsg = ref("");

const redirect = useRouter();

const checkPass = () => {
  return password.value === confirmPassword.value ? true : false;
};

const signUp = async () => {
  if (checkPass()) {
    try {
      await useUserStore().signUp(email.value, password.value);
      redirect.push({ path: "/auth/login" });
    } catch (error) {
      errorMsg.value = `Error: ${error.message}`;
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

const signUpGoogle = async () => {
  try {
    await useUserStore().signUpGoogle();
    redirect.push({ path: "/auth/login" });
  } catch (error) {
    errorMsg.value = `Error: ${error.message}`;
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
