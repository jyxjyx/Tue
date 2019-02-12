import Tue from './main';
let Tan = new Tue({
    ele: '#app',
    template: `<div class="c1" :class="testclass" :style="teststyle">
                    我是div的文字内容
                    <span :class="testclass">我是行内span</span>
                    <div>
                        我是1号二级div,热部署
                        <div @click="handlerClick">我是三级div</div>
                    </div>
                    <div>这是变量testMsg的内容: {{ testMsg }}</div>
                </div>`,
    data: {
        testMsg: 'hello tan',
        testclass: 'test_class',
        teststyle: 'test_style'
    },
    props: {
        testProp: 'I am prop'
    },
    watch: {
        testMsg(newV, oldV) {
            // console.log({newV}, {oldV});
        }
    },
    methods: {
        handlerClick() {
            console.log('I am fn')
        }
    },
    mounted() {
        console.log(this.testMsg)
        setTimeout(() => {
            this.testMsg = 'tan changed';
            console.log(this.testMsg);
        }, 3000)
    }
})
console.log(Tan)