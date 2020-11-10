const app = new Vue({
    el: '#app',
    data: {
        placeholder: 'Inserisci un\'attività',
        newTask: '',
        tasks: [
            'Fare la spesa',
            'Pulire l\'auto',
            'Comprare il regalo per Alberto',
        ]
    },
    methods: {
        addTask() {
            if (this.newTask != '') {
                this.tasks.push(this.newTask)
                this.newTask = ''
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        }
    }
});