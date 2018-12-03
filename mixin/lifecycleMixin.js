// 初始化生命周期
import proxyData from '../utils/proxyData';

const lifecycleKeys = [
    'beforeCreated', 
    'created', 
    'beforeMounted', 
    'mounted', 
    'beforeUpdate',
    'update', 
    'beforeDestoryed',
    'destoryed',
]
export default function lifecycleMixin(Tue) {
    Tue.prototype._initLifecycle = function (options) {
        // 向实例上添加lifecycle属性存储生命周期函数
        this._lifecycle = {};
        // 向lifecycle添加生命周期函数
        lifecycleKeys.forEach(lifecycleName => {
            // 检查有无定义生命周期
            if(!options[lifecycleName]) {
                options[lifecycleName] = new Function();
            }
            // 检查其是否为函数
            if(typeof options[lifecycleName] !== 'function') {
                throw(`${lifecycleName} should be a function`);
            }    
            this._lifecycle[lifecycleName] = options[lifecycleName];
            proxyData(this, '_lifecycle', lifecycleName);
        });
    }
}