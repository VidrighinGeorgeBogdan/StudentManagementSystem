<template>
    <form class="border-2" @submit.stop.prevent="submit()">
      <div class="flex align-items-center my-2 mx-8 min-w-full">
        <span class="p-float-label">
          <Input id="first_name" v-model="first_name" />
          <label for="first_name">First Name</label>
        </span>
      </div>
      <div class="flex align-items-center my-2 mx-8 min-w-full">
        <span class="p-float-label">
          <Input id="last_name" v-model="last_name" />
          <label for="last_name">Last Name</label>
        </span>
      </div>
      <div class="flex align-items-center my-2 mx-8 min-w-full">
        <span class="p-float-label">
          <Password  v-model="password" />
          <label for="password">Password</label>
        </span>
      </div>
      <div class="flex align-items-center my-2 mx-8 min-w-full">
        <span class="p-float-label">
          <Input id="email" v-model="email" />
          <label for="email">User Email</label>
        </span>
      </div>
      <div class="card flex justify-content-center">
        <Dropdown
          v-model="selectedRole"
          :options="roles"
          optionLabel="name"
          placeholder="Select a role"
          class="w-full md:w-14rem"
        />
      </div>
      <div class="card flex justify-content-center">
        <Dropdown
          v-model="selectedStatus"
          :options="status"
          optionLabel="name"
          placeholder="Select a status"
          class="w-full md:w-14rem"
        />
      </div>
      <p class="text-center" style="color: red">{{ error }}</p>
      <div class="flex align-items-center justify-content-center my-4 mx-8">
        <Button label="Submit" type="submit" />
      </div>
    </form>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
var error = ref('')
const password = ref()
const last_name = ref()
const first_name = ref()
const email = ref()
const selectedStatus = ref()
const status = ref([
  { id: 1, name: 'Active' },
  { id: 2, name: 'Retired' }
])
const selectedRole = ref()
const roles = ref([
  { id: 1, name: 'Admin' },
  { id: 2, name: 'Student' },
  { id: 3, name: 'Secretary' },
  { id: 4, name: 'Professor' }
])

function submit() {
  let userT = {
    email: email.value,
    first_name: first_name.value,
    last_name: last_name.value,
    password: password.value,
    role_id: selectedRole.value.id,
    status_id: selectedStatus.value.id
  }
  let user = {
    email: localStorage.getItem('email'),
    first_name: localStorage.getItem('first_name'),
    last_name: localStorage.getItem('last_name'),
    password: localStorage.getItem('password'),
    id: localStorage.getItem('id'),
    role_id: localStorage.getItem('role_id'),
    role: localStorage.getItem('role')
  }
  axios
    .post('http://localhost:5000/users/create', { newUser: userT, sender: user })
    .then((result) => {
      console.log('success')
      if (result.data) {
        console.log('success')
      } else {
        error.value = 'Invalid'
        console.log('invalid')
      }
    })
    .catch((err) => {
      this.error = err
      console.log(err)
    })
}
</script>
<style scoped></style>