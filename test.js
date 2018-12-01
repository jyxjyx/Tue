const Tue = require('./main');
// import typeCheck from './utils/typeCheck'
// const typeCheck = require('./utils/typeCheck')
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