export default function proxyData(tm, sourceKey, key) {
    Object.defineProperty(tm, key, {
        get() {
            return tm[sourceKey][key];
        }
    })
}