import deepclone from '../utils/deepclone'
export function stateMixin(Tue) {
    Tue.prototype._initState = function (options) {
        const data = Tue.prototype._data =  deepclone(options.data);
        const dataKeys = Object.getOwnPropertyNames(data);
        dataKeys.forEach(key => {
            proxyData(Tue, '_data', key);
        })
    }
}