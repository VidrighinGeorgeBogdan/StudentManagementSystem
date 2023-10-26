<template>
  <div class="grade-submission">
    <h1 class="title">Grade Submission</h1>

    <div class="form-container">
      <label for="studentName" class="label">Student Name:</label>
      <input type="text" id="studentName" v-model="studentName" required class="input">

      <label for="grade" class="label">Grade:</label>
      <input type="number" id="grade" v-model.number="grade" min="0" max="10" required class="input">

      <button type="submit" @click="submitGrade" class="submit-button">Submit Grade</button>
    </div>

    <div>
      <h2 class="subtitle">Grades:</h2>
      <table class="grades-table">
        <tr v-for="(grade, index) in grades" :key="index">
          <td>{{ grade.studentName }}:</td>
          <td>{{ grade.grade }}</td>
          <td><button @click="editGrade(index)" class="edit-button">Edit</button></td>
          <td><button @click="deleteGrade(index)" class="delete-button">Delete</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const studentName = ref('');
    const grade = ref(0);
    const grades = ref([]);

     const submitGrade = () => {
      if (studentName.value && grade.value) {
        const newGrade = {
          studentName: studentName.value,
          grade: grade.value
        };
        grades.value.push(newGrade);
        studentName.value = '';
        grade.value = 0;   
      }
    };

    const editGrade = (index) => {
      if(grades.value[index]){
      studentName.value = grades.value[index].studentName;
      grade.value = grades.value[index].grade;
      grades.value.splice(index, 1);
      }
    };

    const deleteGrade = (index) => {
      grades.value.splice(index, 1);
    };

    return {
      studentName,
      grade,
      grades,
      submitGrade,
      editGrade,
      deleteGrade
    };
  },
  
};
</script>

<style scoped>
.grade-submission {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.form-container {
  margin-bottom: 20px;
}

.label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.submit-button {
  background-color: #4caf50;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.submit-button:hover {
  background-color: #45a049;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 10px;
}

.grades-table {
  width: 100%;
  border-collapse: collapse;
}

.grades-table td {
  padding: 8px;
  border-bottom: 1px solid #ccc;
}

.edit-button,
.delete-button {
  background-color: #2196f3;
  color: #fff;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
}

.edit-button:hover,
.delete-button:hover {
  background-color: #0c7cd5;
}
</style>