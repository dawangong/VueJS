class Vue {
    constructor(obj) {
        this.data = obj.data;
        this.observer(this.data);
    }
    //  对象的属性深度监控
    observer(obj) {
        if(typeof obj === 'object' && obj !== null) {
            for (let prop in obj) {
                this.defineHandle(obj, prop, obj[prop]);
            }
        }
    }
    defineHandle(obj, prop, val) {
        let mg = new Management();
        this.observer(val);
        Object.defineProperty(obj, prop, {
            get: function () {
                Management.target && mg.add(Management.target);
                return val
            },
            set: function (newVal) {
                console.log('变化了');
                mg.notify();
            }
        });
    }
}
//  管理订阅
class Management {
    constructor() {
        this.subs = [];
    }
    add(sub) {
        this.subs.push(sub)
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update();
        });
    }
}
//  订阅者
class Watcher {
    constructor() {
        Management.target = this;
    }
    update() {
        //  更新视图
    }
}