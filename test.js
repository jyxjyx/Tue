import Tue from './main';
let Tan = new Tue({
    data: {
        testMsg: 'hello tan'
    },
    props: {
        testProp: 'I am prop'
    },
    watch: {
        testMsg(newV, oldV) {
            console.log({newV}, {oldV});
        }
    },
    methods: {
        testFn() {
            console.log('I am fn')
        },
        // testMsg() {}
    },
    mounted() {
        console.log(this.testMsg)
        setTimeout( () => {
            this.testMsg = 'tan changed';
            console.log(this.testMsg);
            console.log(this)
        }, 3000 )
    }
})
console.log(Tan)