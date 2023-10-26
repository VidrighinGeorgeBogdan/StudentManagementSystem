<template>
    <div>
      <h1>Student Document Requests</h1>
      <div v-if="isLoading">Loading document requests...</div>
      <div v-else-if="requests.length === 0">No document requests found.</div>
      <div v-else>
        <table>
          <thead>
            <tr>
                <th>ID</th>
              <th>Reason</th>
              <th>Additional Note</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(request, index) in example">
                <td>{{ request.id }}</td>
              <td>{{ request.reason }}</td>
              <td>{{ request.note }}</td>   
              <td>
                <Button @click="downloadPdf(request)">Download</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
    
  
  
  <script setup>
  
  import { reactive, ref } from 'vue';
  import axios from 'axios'
  const example = ref([])
  axios
    .get("http://localhost:5000/studentReq/getstudentreq/1")
    .then((response) => {
      example.value = response.data;
      console.log(example.value)
      //displayOutput(response);
    })
  
  const isLoading = ref(true);
  ;
  const requests = ref([]);
  
  // Simulated asynchronous data fetching
  setTimeout(() => {
    isLoading.value = false;
    requests.value = [
      {
        studentName: 'abc1',
        documentType: 'To serve for a job application',
        status: 'pending'
      },
      {
        studentName: 'def2',
        documentType: 'To attest the activity within the university',
        status: 'approved'
      },
      {
        studentName: 'ghi3',
        documentType: 'To get discounts for toursim attractions',
        status: 'pending'
      }
    ];
  }, 2000);
  
  function downloadPdf(){
    axios
    .get('http://localhost:5000/studentReq/invoice');
    console.log("a intrat")
  }
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }
  
  button {
    background-color: #2196f3;
    color: #fff;
    padding: 4px 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;
  }
  
  button:hover {
    background-color: #0c7cd5;
  }
  
  button[disabled] {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>