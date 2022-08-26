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
