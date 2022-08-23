<template>
  <div>
    <br />
    <hr />
    <div><a href="/">TaskApp</a></div>
    <div>
      <p>
        © {{ time }} TaskApp. All rights reserved. Built with ❤️ and ☕️ by
        Aitor Lancharro.
      </p>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";

// Function to change the year automatically.
const time = moment().format("YYYY");
</script>

<style></style>
