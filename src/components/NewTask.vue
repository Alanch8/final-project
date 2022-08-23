<template>
  <div>
    <h2>Add a new Task</h2>
    <p>Keep your life organized, prepare for a trip? Start here!</p>
    <!-- Change the date everyday -->
    <p>Today's Date is {Aug 22nd 2022}</p>
    <div>
      <input
        type="text"
        placeholder="Add a Task Title - Listen to Kendrick Lamar"
        v-model="title"
      />
      <br />
      <input
        type="text"
        placeholder="Add a Task Decription - Look up Kendrick
      Lamar's FEAR album on spotify and listen to the whole album."
        v-model="description"
      />
      <br />
      <button @click="getInfo" type="submit">Add</button>
      <p v-if="errorMsg" class="errorMsg">{{ errorMsg }}.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// constant to save a variable that define the custom event that will be emitted to the homeView
const emit = defineEmits(["childEmitTask"]);

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
    const task = {
      title: title.value,
      description: description.value,
    };
    emit("childEmitTask", task);
    title.value = "";
    description.value = "";
  } else {
    errorMsg.value = "Error: Title is required";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};

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
