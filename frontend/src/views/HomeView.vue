<script setup>
  import { ref } from "vue";
  const goToPage = (page) => {
    window.location.href = `/${page}`;
  };
  const userEmail = ref(localStorage.getItem("email"));
</script>

<template>
  <main>
    <div class="flex">
      <div class="border" v-if="!userEmail">
        <img src="../assets/computer.png" alt="computer" width="100" height="100" />
        <br />
        <Button label="Login" class="mt-25" @click.stop.prevent="goToPage('login')"></Button>
      </div>
      <div class="border">
        <img src="../assets/eye_glasses.png" alt="computer" width="100" height="100" />
        <br />
        <Button label="Schedule" class="mt-25" @click.stop.prevent="goToPage('schedule')"></Button>
      </div>
    </div>
  </main>
</template>
<style scoped>
.mt-25 {
  margin-top: 25px;
}
.border {
  border: 3px solid blue;
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  width: 300px;
  margin: 20px auto;
}
</style>
