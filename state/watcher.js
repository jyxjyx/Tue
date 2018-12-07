// watcher观察者类
let id = 0;
class Watcher {
    constructor() {
        this.id = id;
        id++;
    }
    notify() {}
}
export default Watcher;