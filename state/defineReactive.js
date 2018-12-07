// 将对象变为响应式对象
export default function defineReactive(tm, prop, watcher) {
    for(let key in tm[prop]) {
    }
    Object.defineProperty(tm, prop, {
        enumerable: true,
        configurable: true,
        get() {},
        set() {}
    })
}