<template>
<div>
    {{ example }}
  </div>
    <div class="flex flex-wrap justify-content-center pt-8 ">
      
      <form class="border-2">
          <h3 class="flex align-items-center justify-content-center my-4">Edit Account</h3>
          <div class="flex align-items-center  my-2 mx-8 min-w-full">
          <span class="p-float-label">
              <Input id="email" v-model="value" />
              <label for="email">Email </label>
          </span>
        </div>
        <div class="flex align-items-center  my-2 mx-8 min-w-full">
          <span class="p-float-label">
              <Input id="firstName" v-model="value" />
              <label for="firstName">First Name</label>
          </span>
        </div>
        <div class="flex align-items-center  my-2 mx-8 min-w-full">
          <span class="p-float-label">
              <Input id="lastName" v-model="value" />
              <label for="lastName">Last Name</label>
          </span>
        </div>
        <div class="flex align-items-center  my-2 mx-8 min-w-full">
          <span class="p-float-label">
              <Input id="password" v-model="value" />
              <label for="password">Password</label>
          </span>
        </div>
        <div class="card flex justify-content-center">
          <Dropdown v-model="selectedRole" :options="roles" optionLabel="name" placeholder="Select role" class="w-full md:w-14rem" />
        </div>
        <div class="flex align-items-center justify-content-center my-4 mx-8">
        <Button label="Submit" type="submit" />
        </div>
      </form>
      
    </div>
  
  </template>
  
  <script setup>
    import axios from "axios";
    import {ref, reactive } from "vue";
  const selectedRole = ref("");
  const roles = ref([
      { name: 'Admin' },
      { name: 'Student'},
      { name: 'Professor' },
      { name: 'Secretary' },
  ]);
  let example =ref([]);
  function get(){}
  axios
  .get("http://localhost:5000/users/get")
  .then((response) => {
    example.value=response.data;
    //displayOutput(response);
  })
  .catch((err) => console.log(err));
  </script>
  <style>
  
  </style>
  
  