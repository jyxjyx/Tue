import stateMixin from './mixin/stateMixin'
import initMixin from './mixin/initMixin'
export default function Tue(options) {
    this._init(options);
    console.log(this)
    // this.mounted();
}
stateMixin(Tue);
initMixin(Tue);
