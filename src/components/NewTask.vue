<template>
  <section class="pt-4">
    <div class="container px-4 mx-auto">
      <div
        class="max-w-4xl mx-auto text-center animate__animated animate__fadeIn"
      >
        <h2
          class="addTitle my-2 text-4xl md:text-5xl leading-tight font-bold tracking-tighter"
        >
          Add a new Task
        </h2>
        <p class="text-md md:text-xl font-medium opacity-50">
          Keep your life organized, prepare for a trip? Start here!
        </p>
        <p class="mb-10 opacity-25 font-medium">Today's Date is {{ time }}</p>
        <div class="mb-4">
          <div class="flex flex-col px-4">
            <input
              class="inputField my-1"
              type="text"
              placeholder="Add a Task Title - Listen to Kendrick Lamar"
              v-model="title"
            />
            <input
              class="inputField my-1"
              type="text"
              placeholder="Add a Task Decription - Look up Kendrick Lamar's FEAR album on spotify and listen to the whole album."
              v-model="description"
            />
            <button
              class="inline-block my-2 py-2 px-4text-sm leading-5 bg-at-light-green hover:bg-transparent text-white font-semibold hover:text-at-light-green py-2 px-4 my-2 w-full border border-transparent hover:border-at-light-green border-2 rounded-md"
              @click="getInfo"
              type="submit"
            >
              Add
            </button>
            <p v-if="errorMsg" class="errorMsg">{{ errorMsg }}.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import moment from "moment";

const emit = defineEmits(["childEmitItem"]);

const title = ref("");

const description = ref("");

const displayErrorMsg = false;

const errorMsg = ref("");

const getInfo = async () => {
  if (title.value.length > 0) {
    const item = {
      title: title.value,
      description: description.value,
    };
    emit("childEmitItem", item);
    title.value = "";
    description.value = "";
  } else {
    errorMsg.value = "Error: Title is required";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};

const time = moment().format("MMM Do YYYY");
</script>

<style></style>
