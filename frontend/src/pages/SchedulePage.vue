<template>
  <div v-if="role === 'student'">
    <ScheduleStudent></ScheduleStudent>
  </div>
  <div v-if="role === 'professor'">
    <ScheduleProfessor></ScheduleProfessor>
  </div>
  <div v-if="!role || role === 'admin' || role === 'secretary'">
    <ScheduleUnAuth></ScheduleUnAuth>
  </div>
</template>

<script setup>
import ScheduleStudent from '@/components/ScheduleStudent.vue'
import ScheduleProfessor from '@/components/ScheduleProfessor.vue'
import ScheduleUnAuth from '@/components/ScheduleUnAuth.vue'
import { ref } from 'vue'
var role = ref(localStorage.getItem('role'))
</script>
<style></style>
