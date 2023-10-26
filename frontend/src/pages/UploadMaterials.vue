<template>
{{ formData }}
    <div class="flex flex-wrap justify-content-center pt-8 ">
      
      <form class="border-2" @submit.stop.prevent="submit(formData)">
          <h3 class="flex align-items-center justify-content-center my-4">Student Request Form</h3>
        <div class="card flex justify-content-center">
          <Dropdown v-model="selectedSpecialization" :options="specializations" optionLabel="name" placeholder="Select a Specialization" class="w-full md:w-14rem" />
      </div>
      <div class="card flex justify-content-center pt-3">
          <Dropdown v-model="selectedYear" :options="years" optionLabel="name" placeholder="Select a Year" class="w-full md:w-14rem" />
      </div>
      <div class="card flex justify-content-center pt-3">
      <Upload v-model="file" mode="basic" name="demo[]" url="./upload.php" accept="pdf/*" :maxFileSize="1000000" @upload="onUpload" />
      </div>
        <div class="flex align-items-center justify-content-center my-4 mx-8">
        <Button label="Submit" type="submit" />
        </div>
      </form>
    </div>
  </template>

<script setup>

import axios from 'axios';
import {reactive, ref} from 'vue'

const selectedSpecialization =ref();
const selectedYear= ref();
const file=ref();

const years = ref([
  { id: 1, name: 'AC1' },
  { id: 2, name: 'AC2' },
  { id: 3, name: 'AC3' },
  { id: 4, name: 'AC4' },
  { id: 5, name: 'D1' },
  { id: 6, name: 'D2' },
  { id: 7, name: 'D3' },
  { id: 8, name: 'M1' },
  { id: 9, name: 'M2' },
  { id: 10, name: 'M3' },
  { id: 11, name: 'M4' },
  { id: 12, name: 'M5' },
  { id: 13, name: 'M6' }
])
const specializations = ref([
  { id: '1', name: 'CEN' },
  { id: '2', name: 'CR' },
  { id: '3', name: 'MG' },
  { id: '4', name: 'AC' },
  { id: '5', name: 'ISE' }
])
function submit(file,selectedSpecialization,selectedYear){
 
axios
  .post('http://localhost:5000/uploads/upload',{file,selectedSpecialization,selectedYear})
  .then(res=> res.json())
  .then(data=> console.log(data))
}
  </script>