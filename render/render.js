function render(ast, tue, parentVNode) {
    // 初始化vnode配置
    const nodeOpt = {
        tag: '',
        parent: parentVNode,
        text: '',
        children: [],
        class: '',
        style: '',
        events: {}
    }
    const vnode = new VNode(nodeOpt);
    // 如果为文本节点，则创建一个文本vnode
    if(typeof ast === 'string') {
        nodeOpt.tag = '';
        nodeOpt.text = ast;
    }
    // 如果为ast，则进行解析
    else if(ast instanceof AstLeave) {
        nodeOpt.tag = ast.tag;
        // 解析style
        ast.attr_normal.style && ast.attr_normal.style.forEach(item => {
            if(!nodeOpt.style) {
                nodeOpt.style = '';
            }
            nodeOpt.style += item;
        })
        ast.attr_variable.style && ast.attr_variable.style.forEach(item => {
            if(!nodeOpt.style) {
                nodeOpt.style = '';
            }
            nodeOpt.style += tue[item];
        })

        // 解析class
        ast.attr_normal.class && ast.attr_normal.class.forEach(item => {
            if(!nodeOpt.class) {
                nodeOpt.class = '';
            } else {
                nodeOpt.class += ' ';
            }
            nodeOpt.class += item;
        })
        ast.attr_variable.class && ast.attr_variable.class.forEach(item => {
            if(!nodeOpt.class) {
                nodeOpt.class = '';
            } else {
                nodeOpt.class += ' ';
            }
            nodeOpt.class += tue[item];
        })

        // 解析event
        Object.keys(ast.events).forEach(item => {
            nodeOpt.events[item] = tue[ast.events[item]];
        })

        ast.children && ast.children.forEach(item => {
            nodeOpt.children.push(render(item, tue, vnode));
        })
    }
    
    // 重新配置vnode
    vnode.setVNode(nodeOpt);
    console.log(nodeOpt)
    
    return vnode; 
}

export default render;