class Vue {
    constructor(obj) {
        let id = obj.el;
        this.data = obj.data;
        this.observer(this.data);
        let dom = this.nodeToFragment(document.getElementById(id));
        //  编译完成后，将 dom 返回到 app 中
        document.getElementById(id).appendChild(dom);
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
                console.log('小心倍增');
                Management.target && mg.add(Management.target);
                return val
            },
            set: function (newVal) {
                console.log(newVal, val);
                if (newVal === val) return;
                //  被触发后改变val 后续触发get获取val赋值给视图层节点值刷新视图
                val = newVal;
                console.log('变化了');
                mg.notify();
            }
        });
    }
    nodeToFragment(node, vm) {
        //  创建一个新的空白的文档片段
        let flag = document.createDocumentFragment(),
            child;
        while (child = node.firstChild) {
            this.compile(child, vm);
            flag.appendChild(child); // 将子节点劫持到文档片段中
        }
        return flag;
    }
    compile(node) {
        //  如果是元素节点
        if(node.nodeType === 1) {
            //  获取属性的集合
            let attr = [...node.attributes];
            attr.forEach(att => {
                if(att.nodeName === 'v-model') {
                    //  获取 v-model 绑定的属性名
                    this.name = att.nodeValue;
                    node.addEventListener('input', e => {
                        //  给相应的 data 属性赋值，进而触发该属性的 set 方法
                        this.data[this.name] = e.target.value;
                    });
                    node.value = this.data[this.name]; //   将 data 的值赋给该 node
                }
            });
            new Watcher(this, node, this.name, 'input');
        }
        if (node.nodeType === 3) {
            let reg = /\{\{(.*)\}\}/;
            if (reg.test(node.nodeValue)) {
                let name = RegExp.$1; //  获取匹配到的字符串
                name = name.trim();
                new Watcher(this, node, name, 'text');
            }
        }
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
    constructor(vm, node, name, nodeType) {
        Management.target = this;
        this.vm = vm;
        this.node = node;
        this.name = name;
        this.nodeType = nodeType;
        this.update();
        //  防止this.subs数量意外增加 倍数调用update方法 造成内存溢出
        Management.target = null;
    }
    update() {
        this.get();
        //  更新视图
        if (this.nodeType === 'text') {
            this.node.nodeValue = this.value;
        }
        if (this.nodeType === 'input') {
            this.node.value = this.value;
        }
    }
    // 获取 data 中的属性值
    get () {
        this.value = this.vm.data[this.name]; // 触发相应属性的 get
    }
}