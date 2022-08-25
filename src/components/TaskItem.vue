<template>
  <div
    class="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 animate__animated animate__zoomIn"
  >
    <div class="group h-full">
      <div
        class="group relative h-full px-8 pt-8 pb-8 bg-white rounded-md shadow-md hover:shadow-xl transition duration-200"
      >
        <div>
          <h3
            class="text-2xl leading-7 text-moonlit-black opacity-90 font-bold max-w-xs"
          >
            {{ item.title }}
          </h3>
          <p class="mt-1 text-moonlit-black opacity-80">
            {{ item.description }}
          </p>
        </div>
        <div class="flex mt-4" v-if="showEditOptions">
          <form @submit.prevent="editTask">
            <div>
              <input
                class="inputField my-1"
                type="text"
                placeholder="Edit Title"
                v-model="taskTitle"
              />
            </div>
            <div>
              <input
                class="inputField my-1"
                type="text"
                placeholder="Edit Description"
                v-model="taskDescription"
              />
            </div>
            <button
              class="inline-block my-2 py-2 px-4text-sm leading-5 bg-at-light-green hover:bg-transparent text-white font-semibold hover:text-at-light-green py-2 px-4 my-2 w-full border border-transparent hover:border-at-light-green border-2 rounded-md"
              type="submit"
              value="Edit"
            >
              Edit
            </button>
          </form>
        </div>
        <div class="w-1/2">
          <div class="flex items-center justify-between pt-2">
            <div
              class="text-black p-3 mr-1 rounded bg-transparent hover:bg-gray-100 hover:text-black"
              @click="completedTask"
            >
              <p v-if="!item.is_complete">
                <i
                  class="fa-solid fa-check fa-lg text-green-500 opacity-75 hover:opacity-75"
                ></i>
              </p>
              <p v-else>
                <i
                  class="fa-solid fa-check fa-lg opacity-50 hover:opacity-75"
                ></i>
              </p>
            </div>
            <div
              class="text-black p-3 mr-1 rounded bg-transparent hover:bg-gray-100 hover:text-black"
            >
              <i
                class="fa-solid fa-pen fa-lg opacity-50 hover:text-yellow-500"
                @click="showEdit"
              ></i>
            </div>
            <div
              class="text-black p-3 rounded bg-transparent hover:bg-gray-100 hover:text-black"
            >
              <i
                class="fa-solid fa-trash fa-lg opacity-50 hover:text-rose-500"
                @click="deleteTask"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const taskTitle = ref("");
const taskDescription = ref("");

const showEditOptions = ref(false);

const emit = defineEmits([
  "childEditStatus",
  "childToggleStatus",
  "childDeleteStatus",
]);

/* const props = defineProps({item: Array}); */
const props = defineProps(["item"]);

const showEdit = () => {
  showEditOptions.value = !showEditOptions.value;
};
const editTask = () => {
  const newTask = {
    title: taskTitle.value,
    description: taskDescription.value,
    id: props.item.id,
  };
  emit("childEditStatus", newTask);
  (taskTitle.value = ""), (taskDescription.value = "");
};

const completedTask = (id) => {
  emit("childToggleStatus", props.item.id);
};

const deleteTask = () => {
  emit("childDeleteStatus", props.item.id);
};
</script>

<style></style>

<!-- 
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or like an object, up to you.
2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error, a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit the new task detail or details[this is in reference of the task title and the task description].
3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the status[completed, not complted] of the taskItem.
4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean empty variable.
5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the inputField will be used here to save the value as a prop on this function.
6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.
7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional that first checks if the value of the task [either title and description or just title] is empty which if true it runs the function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2 back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2; a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field to an empty string to clear it from the ui. 
8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->
