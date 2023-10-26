<template>
  <div class="card relative z-2">
      <Menubar :model="items" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';
const items = ref([
  {
      label: 'Quit',
      icon: 'pi pi-fw pi-power-off'
  }
]);
</script>