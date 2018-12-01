import deepclone from '../utils/deepclone'
import proxyData from '../utils/proxyData'
export default function stateMixin(Tue) {
    Tue.prototype._initState = function (options) {
        const data = Tue._data =  deepclone(options.data);
        const dataKeys = Object.getOwnPropertyNames(data);
        dataKeys.forEach(key => {
            proxyData(Tue, '_data', key);
        })
    }
}