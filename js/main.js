const app = new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: [
            'Fare la spesa',
            'Pulire l\'auto',
            'Comprare il regalo per Alberto',
        ]
    },
    methods: {
        addTask() {
            if (this.newTask.trim() != '') {
                if (!this.tasks.includes(this.newTask)){
                    this.tasks.push(this.newTask)
                    this.newTask = ''
                } else {
                    alert('Hai già inserito questo task')
                }
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        }
    }
});