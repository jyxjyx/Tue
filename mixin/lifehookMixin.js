// 初始化生命周期
const proxyData = require('../utils/proxyData');

const lifehookKeys = [
    'beforeCreated', 
    'created', 
    'beforeMounted', 
    'mounted', 
    'beforeUpdate',
    'update', 
    'beforeDestoryed',
    'destoryed',
]
module.exports = function lifehookMixin(Tue) {
    Tue.prototype._initLifehook = function (options) {
        // 向实例上添加lifehooks属性存储生命周期函数
        this._lifehooks = {};
        // 向lifehooks添加生命周期函数
        lifehookKeys.forEach(lifehookName => {
            // 检查有无定义生命周期
            if(!options[lifehookName]) {
                options[lifehookName] = new Function();
            }
            // 检查其是否为函数
            if(typeof options[lifehookName] !== 'function') {
                throw(`${lifehookName} should be a function`);
            }    
            this._lifehooks[lifehookName] = options[lifehookName];
            proxyData(this, '_lifehooks', lifehookName);
        });
    }
}