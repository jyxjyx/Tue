import stateMixin from './mixin/stateMixin';
import initMixin from './mixin/initMixin';
import lifecycleMixin from './mixin/lifecycleMixin'
function Tue(options) {
    this._init(options);
}
stateMixin(Tue);
initMixin(Tue);
lifecycleMixin(Tue);
export default Tue;