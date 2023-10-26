<template>
    <form class="border-2" @submit.stop.prevent="submit()">
      <div class="flex align-items-center my-2 mx-8 min-w-full">
        <span class="p-float-label">
          <Input id="name" v-model="name" />
          <label for="name">Class Name</label>
        </span>
      </div>
      <div class="flex align-items-center my-2 mx-8 min-w-full">
        <span class="p-float-label">
          <Input id="duration" v-model="duration" />
          <label for="duration">Duration of the class</label>
        </span>
      </div>
      <div class="flex align-items-center my-2 mx-8 min-w-full">
        <span class="p-float-label">
          <Input id="startTime" v-model="startTime" />
          <label for="startTime">Starting Time of the class</label>
        </span>
      </div>
      <div class="flex align-items-center my-2 mx-8 min-w-full">
        <span class="p-float-label">
          <Input id="selectedTeacher" v-model="selectedTeacher" />
          <label for="selectedTeacher">Select the teacher of the class</label>
        </span>
      </div>
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
          v-model="selectedWeekday"
          :options="weekdays"
          optionLabel="name"
          placeholder="Select a Weekday"
          class="w-full md:w-14rem"
        />
      </div>
      <div class="card flex justify-content-center">
        <Dropdown
          v-model="selectedWeekly"
          :options="weekly"
          optionLabel="name"
          placeholder="Select if it is weekly"
          class="w-full md:w-14rem"
        />
      </div>
      <div
        class="card flex justify-content-center"
        v-if="selectedWeekly && selectedWeekly.name == 'false'"
      >
        <Dropdown
          v-model="selectedParity"
          :options="Parity"
          optionLabel="name"
          placeholder="Select if it is on an even or odd week"
          class="w-full md:w-14rem"
        />
      </div>
      <div class="card flex justify-content-center">
        <Dropdown
          v-model="selectedSubject"
          :options="subjects"
          optionLabel="name"
          placeholder="Select a subject"
          class="w-full md:w-14rem"
        />
      </div>
      <div class="card flex justify-content-center">
        <Dropdown
          v-model="selectedType"
          :options="types"
          optionLabel="name"
          placeholder="Select a type of class"
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
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
var error = ref('')
const name = ref()
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
const selectedWeekday = ref()
const weekdays = ref([
  { id: '1', name: 'Monday' },
  { id: '2', name: 'Tuesday' },
  { id: '3', name: 'Wednesday' },
  { id: '4', name: 'Thursday' },
  { id: '5', name: 'Friday' },
  { id: '6', name: 'Saturday' },
  { id: '7', name: 'Sunday' }
])
const selectedWeekly = ref()
const weekly = ref([
  { id: 1, name: 'true' },
  { id: 0, name: 'false' }
])
const selectedParity = ref()
const Parity = ref([
  { id: 1, name: 'even' },
  { id: 0, name: 'odd' }
])
const duration = ref()
const startTime = ref()
const selectedSubject = ref()
const subjects = ref([
  { id: 1, name: 'PDA' },
  { id: 2, name: 'CDS' },
  { id: 3, name: 'AI' },
  { id: 4, name: 'MICRO' },
  { id: 5, name: 'CSO' },
  { id: 6, name: 'P1' },
  { id: 7, name: 'P2' },
  { id: 8, name: 'OOP' },
  { id: 9, name: 'OOD' },
  { id: 10, name: 'ELTH' },
  { id: 11, name: 'LD1' },
  { id: 12, name: 'LD2' }
])
const selectedType = ref()
const types = ref([
  { id: 1, name: 'Course' },
  { id: 2, name: 'Laboratory' },
  { id: 3, name: 'Seminary' },
  { id: 4, name: 'Practical Session' },
  { id: 5, name: 'Research' }
])
const selectedTeacher = ref(1)
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

function submit() {
  console.log(selectedSpecialization.value)
  console.log(semesters.value.find((element) => element.name === selectedSemester.value))
  let classT = {
    name: name.value,
    group_id: selectedGroup.value.id,
    year_id: selectedYear.value.id,
    semester: selectedSemester.value.id,
    specialization_id: selectedSpecialization.value.id,
    subgroup_id: selectedSubGroup.value.id,
    type_id: selectedType.value.id,
    subject_id: selectedSubject.value.id,
    professor_id: selectedTeacher.value,
    duration: duration.value + ':00',
    start_time: startTime.value + ':00',
    weekday: selectedWeekday.value.id,
    weekly: selectedWeekly.value.id,
    parityWeek:
      selectedParity.value === { id: 1, name: 'even' } ||
      selectedParity.value === { id: 0, name: 'odd' }
        ? selectedParity.value.id
        : 0
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
    .post('http://localhost:5000/classes/create', { newClass: classT, user: user })
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