<template>
  <a
    class="font-medium text-emerald-800 hover:text-at-light-green-900 hover:underline"
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
