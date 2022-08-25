<template>
  <a
    class="font-medium text-at-light-green opacity-75 hover:text-at-light-green hover:opacity-100 hover:underline"
    ><router-link :to="route">{{ buttonText }}</router-link></a
  >
</template>

<script setup>
defineProps({
  route: String,
  buttonText: String,
});
</script>

<style></style>
