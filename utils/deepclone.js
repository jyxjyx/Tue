export default function deepclone(obj) {
    if(typeof obj !== 'object' || obj === null) return obj;
    let cloneObj = new Object();
    Object.getOwnPropertyNames(obj).forEach(nameItem => {
        if(typeof obj[nameItem] === 'object')
            cloneObj[nameItem] = deepclone(obj[nameItem]);
        else
            cloneObj[nameItem] = obj[nameItem];
    })
    return cloneObj;
}