<template>
  <nav
    class="sticky bg-opacity-60 backdrop-filter backdrop-blur-lg w-full top-0 z-10 bg-white px-2 sm:px-4 py-4 rounded"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a
        href="/"
        class="router-link-active router-link-exact-active flex items-center"
        ><img
          src="/public/taskapp-brand-logo.png"
          alt="taskapp-brand-logo"
          class="mr-3 h-6 sm:h-9 animate__animated animate__bounce"
      /></a>
      <button
        class="exit-mb mr-3 text-moonlit-black opacity-75"
        @click="logout"
      >
        <i class="fa-solid fa-right-from-bracket"></i>
      </button>
      <div class="hidden w-full md:block md:w-auto">
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li class="flex items-center justify-center">
            <p
              class="text-center block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 dark:text-white"
            >
              Welcome back
            </p>
            <p class="font-bold ml-1">{{ user }}</p>
            <div class="hidden md:block w-8 ml-3">
              <img src="/public/avatar.png" alt="" />
            </div>
            <div class="hidden md:block bg-auto ml-5">
              <img src="/public/separator.png" alt="" />
            </div>
          </li>
          <li class="flex justify-center pt-4 md:pt-0">
            <button
              class="inline-block my-2 py-2 px-4text-sm leading-5 bg-at-light-green hover:bg-transparent text-white font-semibold hover:text-at-light-green py-2 px-4 my-2 w-full border border-transparent hover:border-at-light-green border-2 rounded-md"
              @click="logout"
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const redirect = useRouter();
const user = computed(() => useUserStore().$state.user.email.split("@")[0]);
const userEmail = user.value.split("@")[0];

const logout = async () => {
  await useUserStore().signOut();
  redirect.push({ path: "/auth/login" });
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
