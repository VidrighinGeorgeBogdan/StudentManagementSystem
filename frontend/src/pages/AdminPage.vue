<template>
  <h3 class="flex align-items-center justify-content-center my-4">Admin Panel</h3>
  <div class="flex flex-wrap justify-content-center pt-8">
    <Accordion :activeIndex="0">
    <AccordionTab header="Add Class">
      <AddClass></AddClass>
    </AccordionTab>
    <AccordionTab header="Add User">
        <AddUser></AddUser>
    </AccordionTab>
</Accordion>
  </div>
</template>
<script setup>
import AddClass from '../components/AddClass.vue'
import AddUser from '../components/AddUser.vue'
</script>
<style></style>
