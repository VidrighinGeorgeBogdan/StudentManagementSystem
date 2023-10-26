<template>
  <div>
    <h1>Course Exams</h1>
    <div v-if="isLoading">Loading exams...</div>
    <div v-else-if="exams.length === 0">No exams found for this course.</div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Exam Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(exam, id) in exams" :key="id">
            <td>{{ exam.coursename }}</td>
            <td>{{ exam.title }}</td>
            <td>{{ exam.description }}</td>
            <td>{{ exam.date }}</td>
            <td>{{ exam.duration }} minutes</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isLoading = ref(true);
    const exams = ref([]);

    // Simulated asynchronous data fetching
    setTimeout(() => {
      isLoading.value = false;
      exams.value = [
        {
          coursename : "Vue",
          title: 'Midterm Exam',
          description: 'A midterm exam covering the course material',
          date: '2023-05-20',
          duration: 120
        },
        {
          coursename : "Vue",
          title: 'Final Exam',
          description: 'A final exam for the course',
          date: '2023-06-15',
          duration: 180
        }
      ];
    }, 2000);

    return {
      isLoading,
      exams
    };
  }
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
  margin-bottom: 20px;
}

th,
td {
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f5f5f5;
}

tr:hover {
  background-color: #eaeaea;
}

tr:last-child {
  border-bottom: none;
}

td:first-child {
  border-radius: 4px 0 0 4px;
}

td:last-child {
  border-radius: 0 4px 4px 0;
}

div[hidden] {
  display: none;
}

div[hidden] + table {
  margin-top: 0;
}
</style>
