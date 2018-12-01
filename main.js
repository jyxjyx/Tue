const stateMixin = require('./mixin/stateMixin');
const initMixin = require('./mixin/initMixin');
const lifehookMixin = require('./mixin/lifehookMixin');
function Tue(options) {
    this._init(options);
}
stateMixin(Tue);
initMixin(Tue);
lifehookMixin(Tue);
module.exports = Tue;