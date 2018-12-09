// 收集watcher
class Dep {
    constructor() {
        this.subs = [];
        
    }
    addWatcher(watcher) {
        this.subs.push(watcher);
    }
    removeWatcher(watcher) {
        let index = this.subs.indexOf(watcher);
        this.subs.splice(index, 1);
    }
    notify() {
        for(let i = 0; i < this.subs.length; i++) {
            this.subs[i].update();
        }
    }
}
export default Dep;