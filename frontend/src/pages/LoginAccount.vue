<template>

    <div class="flex flex-wrap justify-content-center pt-8 ">
      
      <form class="border-2" @submit.stop.prevent="submit(email, password)">
          <h3 class="flex align-items-center justify-content-center my-4">Log in</h3>
        <div class="flex align-items-center  my-2 mx-8 min-w-full">
          <span class="p-float-label">
              <Input id="email" v-model="email" />
              <label for="email">Email Address</label>
          </span>
        </div>
        <div class="flex align-items-center  my-2 mx-8 min-w-full" style="padding-top: 20px;">
          <span class="p-float-label">
              <Password v-model="password" />
              <label for="password">Password</label>
          </span>
        </div>
        <p class=" text-center" style="color:red;">{{ error }}</p>
        <div class="flex align-items-center justify-content-center my-4 mx-8">
        <Button label="Submit" type="submit" />
        </div>
      </form>
    </div>
  
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  var email = ref('');
  var password = ref('');
  var error = ref('');
  const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  const paswordRegex = new RegExp(/^[a-zA-Z0-9!#$%^&*()_+-]{8,}$/);
  function submit (email, password) {
    console.log('email', email)
    console.log('password', password)
    if(emailRegex.test(email) && paswordRegex.test(password)){
      axios.post('http://localhost:5000/auth/login', {
        email: email,
        password: password
      }).then((result)=> {
        // console.log('success');
        if(result.data) {
          localStorage.setItem('email', result.data.email);
          localStorage.setItem('first_name', result.data.first_name);
          localStorage.setItem('last_name', result.data.last_name);
          localStorage.setItem('password', result.data.password);
          localStorage.setItem('id', result.data.id);
          localStorage.setItem('role_id', result.data.role_id);
          localStorage.setItem('role', result.data.role);
          window.location.href = '/';
        } else {
          error.value = 'Invalid email or password';
          console.log('invalid');
        }
      }).catch((err) => {
        this.error = err;
        console.log(err);
      })
    }else{
      error.value = 'Invalid email or password';
      console.log('invalid');
    }
  }
  </script>
  <style>
  
  </style>
  
  