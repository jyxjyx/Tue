// 对对象的深拷贝
module.exports = function deepclone(data) {
    if(!data || typeof data !== 'object' || typeof data === 'function') return data;
    const CP_constructor = data.constructor;
    let cloneObj = new CP_constructor();
    Object.getOwnPropertyNames(data).forEach(nameItem => {
        // if(typeof data[nameItem] === 'object')
        cloneObj[nameItem] = deepclone(data[nameItem]);
        // else
        //     cloneObj[nameItem] = data[nameItem];
    })
    return cloneObj;
}