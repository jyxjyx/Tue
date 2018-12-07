// 将对实例tm的key属性的访问改为对tm[sourceKey][key]的访问
export default function proxyData(tm, sourceKey, key) {
    Object.defineProperty(tm, key, {
        enumerable: true,
        configurable: true,
        get() {
            return tm[sourceKey][key];
        }
    })
}