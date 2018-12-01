// 将对实例tm的key属性的访问改为对tm[sourceKey][key]的访问
module.exports = function proxyData(tm, sourceKey, key) {
    Object.defineProperty(tm, key, {
        get() {
            return tm[sourceKey][key];
        }
    })
}