const app = new Vue({
    el: '#app',
    data: {
        newTask: {
            text: '',
            status: 'ready'
        },
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
            status: 'done'
        }
        ]
    },
    methods: {
        addTask() {
            if (this.newTask['text'].trim() != '') {

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
        },
        checkTask(index) {
            this.tasks[index].status = (this.tasks[index].status == 'ready')  ? 'done' : 'ready';
        }
    }
});