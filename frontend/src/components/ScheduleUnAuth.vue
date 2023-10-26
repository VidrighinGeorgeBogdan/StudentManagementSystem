<template>
    <h1>General Schedule</h1>
    <form class="border-2" @submit.stop.prevent="submit()">
      <div class="card flex justify-content-center">
        <Dropdown
          v-model="selectedGroup"
          :options="groups"
          optionLabel="name"
          placeholder="Select a group of Students"
          class="w-full md:w-14rem"
        />
      </div>
      <div class="card flex justify-content-center">
        <Dropdown
          v-model="selectedSubGroup"
          :options="subgroups"
          optionLabel="name"
          placeholder="Select a subgroup of Students"
          class="w-full md:w-14rem"
        />
      </div>
      <div class="card flex justify-content-center">
        <Dropdown
          v-model="selectedSemester"
          :options="semesters"
          optionLabel="name"
          placeholder="Select the semester"
          class="w-full md:w-14rem"
        />
      </div>
      <div class="card flex justify-content-center">
        <Dropdown
          v-model="selectedSpecialization"
          :options="specializations"
          optionLabel="name"
          placeholder="Select a specialization"
          class="w-full md:w-14rem"
        />
      </div>
      <div class="card flex justify-content-center">
        <Dropdown
          v-model="selectedYear"
          :options="years"
          optionLabel="name"
          placeholder="Select a year of students"
          class="w-full md:w-14rem"
        />
      </div>
      <p class="text-center" style="color: red">{{ error }}</p>
      <div class="flex align-items-center justify-content-center my-4 mx-8">
        <Button label="Submit" type="submit" />
      </div>
    </form>
    {{ schedule }}
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
var error = ref('')
const selectedGroup = ref()
const groups = ref([
  { id: 1, name: 'CEN1.1' },
  { id: 2, name: 'CEN1.2' },
  { id: 3, name: 'CEN1.3' },
  { id: 4, name: 'CEN2.1' },
  { id: 5, name: 'CEN2.2' },
  { id: 6, name: 'CEN2.3' },
  { id: 7, name: 'CEN3.1' },
  { id: 8, name: 'CEN3.2' },
  { id: 9, name: 'CEN3.3' },
  { id: 10, name: '1' },
  { id: 11, name: '2' },
  { id: 12, name: '3' },
  { id: 13, name: '4' },
  { id: 14, name: '5' },
  { id: 15, name: '6' },
  { id: 16, name: '7' },
  { id: 17, name: '8' },
  { id: 18, name: '9' },
  { id: 19, name: '10' },
  { id: 20, name: '11' },
  { id: 21, name: '12' }
])
const selectedYear = ref()
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
const selectedSpecialization = ref()
const subgroups = ref([
  { id: '1', name: 'CEN1.1A' },
  { id: '2', name: 'CEN1.1B' },
  { id: '3', name: 'CEN1.2A' },
  { id: '4', name: 'CEN1.2B' },
  { id: '5', name: 'CEN1.3A' },
  { id: '6', name: 'CEN1.3B' },
  { id: '7', name: 'CEN2.1A' },
  { id: '8', name: 'CEN2.1B' },
  { id: '9', name: 'CEN2.2A' },
  { id: '10', name: 'CEN2.2B' },
  { id: '11', name: 'CEN2.3A' },
  { id: '12', name: 'CEN2.3B' },
  { id: '13', name: 'CEN3.1A' },
  { id: '14', name: 'CEN3.1B' },
  { id: '15', name: 'CEN3.2A' },
  { id: '16', name: 'CEN3.2B' },
  { id: '17', name: 'CEN3.3A' },
  { id: '18', name: 'CEN3.3B' },
  { id: '19', name: '1A' },
  { id: '20', name: '1B' },
  { id: '21', name: '2C' },
  { id: '22', name: '2D' },
  { id: '23', name: '3E' },
  { id: '24', name: '3F' },
  { id: '25', name: '4G' },
  { id: '26', name: '4H' }
])
const selectedSubGroup = ref()
const semesters = ref([
  { id: 0, name: '1' },
  { id: 1, name: '2' }
])
const selectedSemester = ref()

const schedule = ref([])

function submit() {
  let scheduleSelection = {
    group_name: selectedGroup.value.name,
    year_name: selectedYear.value.name,
    semester: selectedSemester.value.id,
    specialization_name: selectedSpecialization.value.name,
    subgroup_name: selectedSubGroup.value.name
  }
  axios
    .post('http://localhost:5000/schedule/unauth', scheduleSelection)
    .then((result) => {
      console.log('success')
      if (result.data) {
        console.log('success')
        schedule.value = result.data
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