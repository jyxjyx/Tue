import Tue from './main';
let Tan = new Tue({
    data: {
        testMsg: 'hello tan'
    },
    props: {
        testProp: 'I am prop'
    },
    methods: {
        testFn() {
            console.log('I am fn')
        },
        // testMsg() {}
    },
    mounted() {
        console.log(this.testMsg)
    }
})
console.log(Tan)