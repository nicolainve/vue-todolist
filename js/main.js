const app = new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: [
        {
            text: 'Fare la spesa',
            status: 'ready'
        },
        {
            text: 'Pulire l\'auto',
            status: 'ready'
        },
        {
            text: 'Comprare il regalo per Alberto',
            status: 'ready'
        }
        ]
    },
    methods: {
        addTask() {
            if (this.newTask.trim() != '') {
                this.tasks.push({
                    text: this.newTask,
                    status: 'ready'
                })
                this.newTask = ''
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        },
        checkTask(index) {
            this.tasks[index].status = (this.tasks[index].status == 'ready')  ? 'done' : 'ready';
        }
    }
});