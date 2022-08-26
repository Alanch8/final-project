<template>
  <div class="min-h-min">
    <Nav />
    <NewTask @childEmitItem="addTask" />
    <div class="pt-4 bg-gray-100">
      <div class="container mx-auto">
        <section class="flex flex-wrap mt-10">
          <TaskItem
            v-for="task in useTaskStore().tasks"
            :key="task.id"
            :item="task"
            @childToggleStatus="queryIsComplete"
            @childEditStatus="editTask"
            @childDeleteStatus="deleteTask"
          >
          </TaskItem>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Nav from "../components/Nav.vue";
import NewTask from "../components/NewTask.vue";
import TaskItem from "../components/TaskItem.vue";
import Footer from "../components/Footer.vue";
import { useTaskStore } from "../stores/task";

const queryIsComplete = async (id) => {
  const AbooleanValue = await useTaskStore().fetchComplete(id);
  //quitarluego
  console.log(AbooleanValue);
  completedTask(id, AbooleanValue);
};

useTaskStore().fetchTasks();

const addTask = async (newTask) => {
  const res = await useTaskStore().addTask(newTask.title, newTask.description);
  useTaskStore().fetchTasks();
};
const completedTask = async (id, AbooleanValue) => {
  const res = await useTaskStore().completedTask(id, AbooleanValue);
  useTaskStore().fetchTasks();
};

const editTask = async (newTask) => {
  const res = await useTaskStore().editTask(
    newTask.title,
    newTask.description,
    newTask.id
  );
  useTaskStore().fetchTasks();
};
const deleteTask = async (id) => {
  const res = await useTaskStore().deleteTask(id);
  useTaskStore().fetchTasks();
};
</script>

<style></style>
