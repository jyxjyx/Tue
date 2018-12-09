// 初始化处理
import renderVnode from '../vdom/renderVnode';
import renderDOM from '../vdom/renderDOM';
import defineReactive from '../state/defineReactive';
import Watcher from '../state/watcher';
import observe from '../state/observe/observe';
export default function initMixin(Tue) {
    Tue.prototype._init = function (options) {
        // 初始化生命周期
        this._initLifecycle(options);
        // 触发beforeCreated钩子
        this.beforeCreated();
        // 初始化数据
        this._initState(options);

        // TODO:...待补充部分，如事件处理

        // 触发created钩子
        this.created();

        // TODO:compile template into render function

        // TODO:模拟返回了一个VNode
        const vnodeTree = renderVnode(this);
        this._vnodeTree = vnodeTree;
        // 初次渲染DOM
        renderDOM(vnodeTree);
        console.log(this)
        
        // 触发beforeMounted钩子
        this.beforeMounted();
        
        // TODO:渲染DOM
        
        // 触发mounted钩子
        this.mounted();
        // 生成实例的渲染watcher
        this._watchers = [];
        // new Watcher(this);

        setTimeout( () => {
            this._watchers[0].update();
        }, 5000 )



        // TODO:将data、prop对象变为响应式对象
        observe(this, this._data);
        defineReactive(this, '_data', 'Watcher');

        // TODO:响应式对象更新后触发DOM重绘

    }
}