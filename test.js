import Tue from './main';
let Tan = new Tue({
    template: `<div class="c1" :class="testclass" :style="teststyle" @click="handlerClick">
                    我是div的文字内容
                    <span :class="testclass">我是行内span</span>
                    <div>
                        我是1号二级div
                        <div @click="handlerClick">我是三级div</div>
                    </div>
                    <div>我是2号二级div</div>
                </div>`,
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