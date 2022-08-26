<template>
  <section>
    <div class="container px-4 mx-auto">
      <div class="mx-auto max-w-4xl">
        <a class="block mt-10 md:py-10 mx-auto mb-5 max-w-max pt-4" href="/"
          ><img
            src="/public/taskapp-brand-logo.png"
            alt="taskapp-brand-logo"
            class="h-10"
        /></a>
      </div>
      <div class="container px-4 mx-auto">
        <p class="py-4 text-lg md:text-xl font-light text-center opacity-75">
          ✭ Star or Fork this project on GitHub
          <span
            ><a href="https://github.com/Alanch8/final-project"
              ><i class="fa-brands fa-github fa-lg"></i></a
          ></span>
        </p>
        <p
          class="py-5 md:pb-20 text-lg md:text-xl font-light text-center opacity-75"
        >
          © {{ time }} TaskApp. All rights reserved. Designed and Code with ❤️
          by
          <span class="font-medium">Aitor Lancharro</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import moment from "moment";

const time = moment().format("YYYY");
</script>

<style></style>
