const app = Vue.createApp({
    data() {
        return {
           counter: 0

        }
    },

    watch: {
        counter(value) {
            if (value > 36) {
            const that = this;

            setTimeout (function () {
                that.counter = 0;
            }, 5000);

            }
        }
    },

    computed: {
        countResult() {

            if (this.counter === 0) {
                return 0;
            }
                else if (this.counter < 37) {
                    return 'not there yet'
                }
                else if (this.counter > 37) {
                    return 'too much'

            } else {
                return 37
            }
        }
    },

        methods: {
        add(num){
            this.counter = this.counter + num;
        },
        reduce(num){
            this.counter = this.counter - num;
        }
    }

});

app.mount('#assignment')