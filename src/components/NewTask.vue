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

// constant to save a variable that define the custom event that will be emitted to the homeView
const emit = defineEmits(["childEmitItem"]);

// constant to save a variable that holds the value of the title input field of the new task
const title = ref("");

// constant to save a variable that holds the value of the description input field of the new task
const description = ref("");

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const displayErrorMsg = false;

// constant to save a variable that holds the value of the error message
const errorMsg = ref("");

// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.
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

// Diego's Aprroach
/* const emptyContainer = ref(false);
const errorMsg2 = ref("");
const getInfo2 = async () => {
  if (title.value.length === "") {
    emptyContainer.value = true;
    errorMsg2.value = "Error: Title is required";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  } else {
    emptyContainer.value = false;
    emit("childEmitTask", task);
    title.value = "";
    description.value = "";
  }
}; */
</script>

<style></style>
