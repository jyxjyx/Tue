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
        setTimeout( () => {
            this.testMsg = 'tan changed';
        }, 5000 )
    }
})
console.log(Tan)