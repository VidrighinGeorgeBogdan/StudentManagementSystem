<template>

  <div class="flex flex-wrap justify-content-center pt-8 ">
    
    <form class="border-2" @submit.stop.prevent="createRequest(document)">
        <h3 class="flex align-items-center justify-content-center my-4">Student Request Form</h3>
      <div class="card flex justify-content-center">
        <Dropdown v-model="document.reason" :options="purposes" optionLabel="name" placeholder="Select a Purpose of Document" class="w-full md:w-14rem" />
    </div>
      <div class="flex align-items-center justify-content-center my-2 mx-8">
            <Input id="username" v-model="document.note" type="text" placeholder="Additional Notes" />
      </div>
      <div class="flex align-items-center justify-content-center my-4 mx-8">
      <Button label="Submit" type="submit" />
      </div>
    </form>
  </div>

</template>

<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
const document =reactive({
  reason: '',
  note: '',
  student_id : '1',
  status_id : '1'
})
const purposes = ref([
    { name: 'To serve for a job application' },
    { name: 'To serve for a travelling subscription/ memberships'},
    { name: 'To get discounts for toursim attractions' },
    { name: 'To attest the activity within the university' },
]);
async function createRequest(document){
  console.log('a intrat');
  console.log(document);
  await axios
  .post('http://localhost:5000/studentReq/create',document)
  .then((result)=>{
    console.log(result.data)
    console.log('success');
    // window.location.href = '/';
  }).catch((err) => {
        
        this.error = err;
        console.log(err);
      })
}
</script>
<style>

</style>

