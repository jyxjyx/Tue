import Dep from "./dep";
import observe from "./observe/observe";
import Watcher from "./watcher";

// 将对象变为响应式对象
export default function defineReactive(obj, prop, ob) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    if(!descriptor.enumerable) {
        return ;
    }
    const dep = new Dep();

    // 是否可以省略此段代码
    // const getter = descriptor && descriptor.get;
    // const setter = descriptor && descriptor.set;
    // let val;
    // TODO:判断条件待填充
    // if(!getter) {
    //     val = obj[prop];
    // }
    let val = obj[prop];
    if(typeof val === 'object') {
        observe(val);
    }
    Object.defineProperty(obj, prop, {
        enumerable: true,
        configurable: true,
        get() {
            // const value = getter ? getter() : val;
            // if(dep.target) {
            //     dep.depend();
            // }
            const watcher = new Watcher;
            if(!ob._watchers[prop]) {
                ob._watchers[prop] = [];
            }
            const watcher = new Watcher();
            ob._watchers[prop].push(watcher);
            return val;
        },
        set(newValue) {
            if(newValue !== val) {
                // TODO:
                ob._watchers[prop].forEach(watcher => {
                    watcher.update();
                })
            }
            return newValue;
        }
    })
}