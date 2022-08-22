<template>
  <nav>
    <div>
      <a href="/">Task App</a>
      <div>
        <ul>
          <li>
            <!--  <p>Welcome back {{ userEmail }}</p> -->
            <p>
              Welcome back {{ user }} que le encanta complicarse mentalmente! tq
              bro es joda :)
            </p>
          </li>
          <li>
            <button @click="logout">Log Out</button>
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

//constant to save a variable that will hold the use router method
const redirect = useRouter();

// constant to save a variable that will get the user from store with a computed function imported from vue
const user = computed(() => useUserStore().$state.user.email.split("@")[0]);

const userEmail = user.value.split("@")[0];

// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
// Logout function
const logout = async () => {
  await useUserStore().signOut();
  redirect.push({ path: "/auth/login" });
};
</script>

<style>
nav {
  display: flex;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
