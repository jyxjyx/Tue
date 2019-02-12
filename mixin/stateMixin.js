// 初始化state：data、props、methods
import deepclone from '../utils/deepclone';
import proxyData from '../utils/proxyData';
export default function stateMixin(Tue) {
    Tue.prototype._initState = function (options) {
        // 挂载模板
        this._template = options.template;

        // 将data挂到实例的_data上
        const data = this._data =  deepclone(options.data);
        const dataKeys = Object.getOwnPropertyNames(data);

        // 将props挂到实例的_props上
        const props = this._props = deepclone(options.props);
        const propKeys = Object.getOwnPropertyNames(props);

        // 将methods挂到实例的_methods上
        const methods = this._methods = deepclone(options.methods);
        const methodKeys = Object.getOwnPropertyNames(methods);

        // 将watch挂到实例_watch上
        const watch = this._watch = deepclone(options.watch);
        const watchKeys = Object.getOwnPropertyNames(watch);

        // 检查watchKeys中是否有不属于data的值
        watchKeys.forEach(watchkey => {
            if(!dataKeys.find(datakey => datakey === watchkey)) {
                throw(`watch name ${item} should be in data`);
            }
        })
        
        // 检查是否有属性重复命名
        dataKeys.forEach( dataName => {
            if(propKeys.includes(dataName)) {
                throw(`data name ${dataName} and props name ${dataName} should not have a same name`);
            }
            if(methodKeys.includes(dataName)) {
                throw(`data name ${dataName} and methods name ${dataName} should not have a same name`);
            }
        })
        propKeys.forEach( propName => {
            if(methodKeys.includes(propName)) {
                throw(`props name ${propName} and methods name ${propName} should not have a same name`);
            }
        })
        // 代理data,methods,props
        dataKeys.forEach(key => {
            proxyData(this, '_data', key);
        });
        propKeys.forEach(key => {
            proxyData(this, '_props', key)
        });
        methodKeys.forEach(key => {
            proxyData(this, '_methods', key)
        });

    }
}