// 初始化处理
import renderVnode from '../vdom/renderVnode';
import renderDOM from '../vdom/renderDOM';
import compareNode from '../vdom/compareNode';

import Watcher from '../state/watcher';
import observe from '../state/observe/observe';
import parse from '../render/parse';
import render from '../render/render';

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

        // 解析template
        const astTree = parse(this.template);
        // 渲染为vnode
        render(astTree, this)
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
        this._watcher = new Watcher(this, vnodeTree, () => {

            const newNodeTree = renderVnode(this)
            compareNode(newNodeTree, vnodeTree);
            // renderDOM(newNodeTree);
            console.log('this is render update');
        });

        // TODO:将data、prop对象变为响应式对象
        new Observe(this._data, this);

        // TODO:响应式对象更新后触发DOM重绘

    }
}