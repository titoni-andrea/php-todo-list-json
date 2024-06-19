const { createApp } = Vue

createApp({
  data() {
    return {
        //Dati locali
        students: [],
        newStudentTask: "",
        newStudentAdvance: "",

        apiUrl: "../server.php",
        postRequestConfig: {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
    }
  },
  methods: {

    addTask() {
      console.log("non funziona nienteeeee", this.newTask);

      const newStudent = {
        task: this.newStudentTask,
        advance: this.newStudentAdvance,
      };

      axios.post(this.apiUrl, newStudent, this.postRequestConfig).then(results => {
        this.students = results.data;
      });
    }

  },
  mounted() {
    this.getTasksList();
    
  }
}).mount('#app')